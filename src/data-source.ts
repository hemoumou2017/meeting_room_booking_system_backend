/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-10-14 16:19:09
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-10-14 16:31:58
 * @FilePath: /nest学习/meeting_room_booking_system_backend/src/data-source.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { User } from './user/entities/user.entity';
import { Role } from './user/entities/role.entity';
import { Permission } from './user/entities/permission.entity';
import { MeetingRoom } from './meeting-room/entities/meeting-room.entity';
import { Booking } from './booking/entities/booking.entity';
config({ path: 'src/.env-migration' });
console.log(process.env);

export default new DataSource({
  type: 'mysql',
  host: `${process.env.mysql_server_host}`,
  port: +`${process.env.mysql_server_port}`,
  username: `${process.env.mysql_server_username}`,
  password: `${process.env.mysql_server_password}`,
  database: `${process.env.mysql_server_database}`,
  synchronize: false,
  logging: true,
  entities: [User, Role, Permission, MeetingRoom, Booking],
  poolSize: 10,
  migrations: ['src/migrations/**.ts'],
  connectorPackage: 'mysql2',
  extra: {
    authPlugin: 'sha256_password',
  },
});
