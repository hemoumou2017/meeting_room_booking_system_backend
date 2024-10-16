/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-09-26 10:14:57
 * @LastEditors: 何欣 1254409474@qq.com
 * @LastEditTime: 2024-10-16 14:42:23
 * @FilePath: /nest学习/meeting_room_booking_system_backend/src/user/dto/register-user.dto.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { LoginUserDto } from './login-user.dto';
export class RegisterUserDto extends PickType(LoginUserDto, [
  'username',
  'password',
]) {
  // @IsNotEmpty({
  //   message: '用户名不能为空',
  // })
  // @ApiProperty()
  // username: string;
  @IsNotEmpty({
    message: '昵称不能为空',
  })
  @ApiProperty()
  nickname: string;
  // @IsNotEmpty({
  //   message: '密码不能为空',
  // })
  // @MinLength(6, {
  //   message: '密码长度不能小于6位',
  // })
  // @ApiProperty({
  //   minLength: 6,
  // })
  // password: string;
  @IsNotEmpty({
    message: '邮箱不能为空',
  })
  @IsEmail(
    {},
    {
      message: '请输入正确的邮箱',
    },
  )
  @ApiProperty()
  email: string;
  @IsNotEmpty({
    message: '验证码不能为空',
  })
  @ApiProperty()
  captcha: string;
}
