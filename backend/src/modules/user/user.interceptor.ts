import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.entity';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data) => {
        if (data instanceof User) {
          const res = { ...data };
          delete res.password;
          return res;
        }
        if (Array.isArray(data)) {
          return data?.map((item: User) => {
            const res = { ...item };
            delete res.password;
            return res;
          });
        }
        return data;
      }),
    );
  }
}
