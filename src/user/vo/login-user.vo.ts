import { ApiProperty } from '@nestjs/swagger';

/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-09-26 15:12:04
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-09-27 14:42:55
 * @FilePath: /nest学习/meeting_room_booking_system_backend/src/user/vo/login-user.vo.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class UserInfo {
  @ApiProperty()
  id: number;

  @ApiProperty({
    example: 'zhangsan',
  })
  username: string;

  @ApiProperty({
    example: '张三',
  })
  nickName: string;

  @ApiProperty({
    example: '<EMAIL>',
  })
  email: string;

  @ApiProperty({
    example: 'https://www.xxx.com/headPic',
  })
  headPic: string;

  @ApiProperty({
    example: '13800000000',
  })
  phoneNumber: string;

  @ApiProperty({
    example: '1',
  })
  isFrozen: boolean;

  @ApiProperty({
    example: '1',
  })
  isAdmin: boolean;

  @ApiProperty()
  createTime: number;

  @ApiProperty({ example: ['admin'] })
  roles: string[];

  @ApiProperty({ example: ['query_aaa'] })
  permissions: string[];
}

export class LoginUserVo {
  @ApiProperty()
  userInfo: UserInfo;

  @ApiProperty()
  accessToken: string;

  @ApiProperty()
  refreshToken: string;
}
