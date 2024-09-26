import { Controller, Post, Body, Get, Query, Inject } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { RedisService } from 'src/redis/redis.service';
import { EmailService } from 'src/email/email.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() registerUser: RegisterUserDto) {
    console.log(registerUser);
    return await this.userService.register(registerUser);
  }

  @Inject(RedisService)
  private redisService: RedisService;

  @Inject(EmailService)
  private emailService: EmailService;
  @Get('register-captcha')
  async getCaptcha(@Query('address') address: string) {
    const code = Math.random().toString().slice(2, 8);
    await this.redisService.set(address, code);
    await this.emailService.sendEmail({
      to: address,
      subject: '注册验证码',
      html: `您的注册验证码为：${code}`,
    });
    return {
      code: 200,
      message: '发送成功',
    };
  }
}
