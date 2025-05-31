import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  async signIn(username: string, pass: number): Promise<any> {
    const findName = await this.userService.findOne(username);
    if (findName?.password !== pass) {
      throw new UnauthorizedException();
    }

    const { password, ...result } = findName;

    return result;
  }
}
