/*
 * @Author: 何欣 1254409474@qq.com
 * @Date: 2024-10-16 09:45:20
 * @LastEditors: 何欣 1254409474@qq.com
 * @LastEditTime: 2024-10-16 09:45:45
 * @FilePath: /nest学习/meeting_room_booking_system_backend/src/auth/auth.module.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './local.strategy';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [UserModule],
  providers: [LocalStrategy, GoogleStrategy],
})
export class AuthModule {}
