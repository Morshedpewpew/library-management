import {MigrationInterface, QueryRunner} from "typeorm";

export class authorBookRelation1664940418361 implements MigrationInterface {
    name = 'authorBookRelation1664940418361'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`book_authors_author\` (\`bookID\` int NOT NULL, \`authorID\` int NOT NULL, INDEX \`IDX_6b6c4b2ee8f24b626c56b39f39\` (\`bookID\`), INDEX \`IDX_04be992e44a5a523a8a4dfb9cc\` (\`authorID\`), PRIMARY KEY (\`bookID\`, \`authorID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`book_authors_author\` ADD CONSTRAINT \`FK_6b6c4b2ee8f24b626c56b39f394\` FOREIGN KEY (\`bookID\`) REFERENCES \`book\`(\`ID\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`book_authors_author\` ADD CONSTRAINT \`FK_04be992e44a5a523a8a4dfb9ccb\` FOREIGN KEY (\`authorID\`) REFERENCES \`author\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book_authors_author\` DROP FOREIGN KEY \`FK_04be992e44a5a523a8a4dfb9ccb\``);
        await queryRunner.query(`ALTER TABLE \`book_authors_author\` DROP FOREIGN KEY \`FK_6b6c4b2ee8f24b626c56b39f394\``);
        await queryRunner.query(`DROP INDEX \`IDX_04be992e44a5a523a8a4dfb9cc\` ON \`book_authors_author\``);
        await queryRunner.query(`DROP INDEX \`IDX_6b6c4b2ee8f24b626c56b39f39\` ON \`book_authors_author\``);
        await queryRunner.query(`DROP TABLE \`book_authors_author\``);
    }

}
