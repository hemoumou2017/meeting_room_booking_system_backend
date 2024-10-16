/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-09-27 09:58:04
 * @LastEditors: 何欣 1254409474@qq.com
 * @LastEditTime: 2024-10-16 14:39:43
 * @FilePath: /nest学习/meeting_room_booking_system_backend/src/user/dto/update-user.dto.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { RegisterUserDto } from './register-user.dto';
export class UpdateUserDto extends PickType(RegisterUserDto, [
  'email',
  'captcha',
]) {
  @ApiProperty()
  headPic: string;

  @ApiProperty()
  nickName: string;

  // @IsNotEmpty({
  //   message: '邮箱不能为空',
  // })
  // @IsEmail(
  //   {},
  //   {
  //     message: '不是合法的邮箱格式',
  //   },
  // )
  // @ApiProperty()
  // email: string;

  // @IsNotEmpty({
  //   message: '验证码不能为空',
  // })
  // @ApiProperty()
  // captcha: string;
}
