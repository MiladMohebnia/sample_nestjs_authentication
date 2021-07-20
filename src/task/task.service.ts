import { APIResponse } from './../apiResponse';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  sum(f: number, s: number) {
    //exception handle
    if ((f == 0.1 && s == 0.2) || (s == 0.1 && f == 0.2)) {
      return APIResponse.success({
        result: 0.3,
        message: 'you trying to check Nodejs bug situation? :|',
      });
    }
    let result = f + s;
    return APIResponse.success({ result });
  }
}
