/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-09-26 10:14:57
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-09-26 10:21:41
 * @FilePath: /nest学习/meeting_room_booking_system_backend/src/user/dto/register-user.dto.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
export class RegisterUserDto {
  @IsNotEmpty({
    message: '用户名不能为空',
  })
  username: string;
  @IsNotEmpty({
    message: '昵称不能为空',
  })
  nickname: string;
  @IsNotEmpty({
    message: '密码不能为空',
  })
  @MinLength(6, {
    message: '密码长度不能小于6位',
  })
  password: string;
  @IsNotEmpty({
    message: '邮箱不能为空',
  })
  @IsEmail(
    {},
    {
      message: '请输入正确的邮箱',
    },
  )
  email: string;
  @IsNotEmpty({
    message: '验证码不能为空',
  })
  captcha: string;
}
