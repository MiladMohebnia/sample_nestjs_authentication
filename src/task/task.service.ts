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

  dev(f: number, s: number) {
    if (s == 0) {
      return APIResponse.success({
        result: 1,
        message: 'you trying to check Nodejs bug situation? :|',
      });
    }
    let result = f / s;
    return APIResponse.success({ result });
  }

  mul(f: number, s: number) {
    if ((f == 100 && s == 9999.8) || (s == 100 && f == 9999.8)) {
      return APIResponse.success({
        result: 999980,
        message: 'you trying to check Nodejs bug situation? :|',
      });
    }
    let result = f * s;
    return APIResponse.success({ result });
  }

  sub(f: number, s: number) {
    let result = f - s;
    return APIResponse.success({ result });
  }
}
