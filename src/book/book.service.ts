import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/category/entity/category.entity';
import { Publisher } from 'src/publisher/entity/publisher.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/book-create.dto';
import { UpdateBookDto } from './dto/book-update.dto';
import { Book } from './entity/book.entity';
@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,) { }
  async get() {
    return await this.bookRepository.find({
      relations: ['category','publisher','authors']

    });
  }
  create(createBookDto: CreateBookDto, category: Category, publisher: Publisher) {

    createBookDto['category'] = category;
    createBookDto['publisher'] = publisher;
    delete createBookDto.category_id;
    delete createBookDto.publisher_id;
    return this.bookRepository.save(createBookDto);
  }
  update(updateBookDto: UpdateBookDto, ID: number) {
    return this.bookRepository.update(ID, updateBookDto);
  }
  show(ID: number) {
    return this.bookRepository.findOne({ where: { ID }, relations:["authors", 'publisher'] });

  }
  getOneBookByName(name: string) {
    return this.bookRepository.findOne({ where: {name } });
  }




  delete(ID: number) {
    return this.bookRepository.delete(ID);
  }

}
