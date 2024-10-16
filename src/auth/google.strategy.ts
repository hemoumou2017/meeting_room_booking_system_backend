/*
 * @Author: 何欣 1254409474@qq.com
 * @Date: 2024-10-16 09:34:26
 * @LastEditors: 何欣 1254409474@qq.com
 * @LastEditTime: 2024-10-16 10:27:00
 * @FilePath: /nest学习/meeting_room_booking_system_backend/src/auth/google.strategy.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { SocksProxyAgent } from 'socks-proxy-agent';

const Agent = new SocksProxyAgent(
  process.env.SOCKS_PROXY_URL || 'socks5://127.0.0.1:7890',
);

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(configService: ConfigService) {
    super({
      clientID: configService.get('google_login_client_id'),
      clientSecret: configService.get('google_login_client_secret'),
      callbackURL: configService.get('google_login_callback_url'),
      scope: ['email', 'profile'],
    });
    this._oauth2.setAgent(Agent);
  }

  validate(accessToken: string, refreshToken: string, profile: any) {
    const { name, emails, photos } = profile;
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken,
    };
    return user;
  }
}
