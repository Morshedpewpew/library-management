import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {
    get() {
        return { name: 'Morshed', email: 'i.morshed2016@gmail.com' };
      }
      create(req: Request){
        return req.body;
      }
      update(req: Request,param :{ID: number}){
        return {body:req.body,param};
      }
      show(param:{ID: number}){
        return param;
      }
      delete(param:{ID: number}){
        return param;
      }

}
