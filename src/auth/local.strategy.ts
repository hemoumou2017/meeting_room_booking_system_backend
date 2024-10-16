/*
 * @Author: 何欣 1254409474@qq.com
 * @Date: 2024-10-16 09:42:25
 * @LastEditors: 何欣 1254409474@qq.com
 * @LastEditTime: 2024-10-16 09:42:31
 * @FilePath: /nest学习/meeting_room_booking_system_backend/src/auth/local.strategy.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  async validate(username: string, password: string) {}
}
