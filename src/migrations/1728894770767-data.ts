/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-10-14 16:32:50
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-10-14 16:48:34
 * @FilePath: /nest学习/meeting_room_booking_system_backend/src/migrations/1728894770767-data.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class Data1728894770767 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "INSERT INTO `users` VALUES (1,'张三','96e79218965eb72c92a549dd5a330112','zhang','xx@xx.com',NULL,NULL,1,0,'2024-09-26 03:02:06.133346','2024-10-09 02:11:49.000000'),(2,'张三22','c0c473bee87a482f312ac656b1b6843d','zhang22','1254409474@qq.com',NULL,NULL,1,0,'2024-09-26 06:53:46.230767','2024-10-09 02:33:16.000000'),(3,'zhangsan','e3ceb5881a0a1fdaad01296d7554868d','张三','1254409474@qq.com','uploads/1728444319546-911162164-avatar.png','13233323333',1,1,'2024-09-26 07:00:41.942188','2024-10-09 03:32:14.000000'),(4,'lisi','1a100d2c0dab19c4430e7d73762b3423','333333','yy@yy.com','xx.png',NULL,1,0,'2024-09-26 07:00:41.971319','2024-10-09 02:33:14.000000'),(5,'this','e10adc3949ba59abbe56e057f20f883e','aaa','1254409474@qq.com',NULL,NULL,1,0,'2024-10-08 04:07:25.856348','2024-10-09 02:33:12.000000'),(6,'this1','96e79218965eb72c92a549dd5a330112','this1','1254409474@qq.com','uploads/1728377716635-568556541-avatar_2.png',NULL,1,0,'2024-10-08 06:18:09.023565','2024-10-09 02:33:04.000000')",
    );
    await queryRunner.query(
      "INSERT INTO `meeting_room` VALUES (3,'天王星33',30,'三层东','白板，电视','',0,'2023-09-16 08:10:25.319000','2023-09-16 08:10:25.319000'),(6,'aa',10,'bb','','',0,'2023-09-16 16:11:31.532151','2023-09-16 16:11:31.532151'),(11,'xxx',0,'xxx','xxx','xxx',0,'2023-09-28 00:27:28.529606','2023-09-28 00:27:28.529606'),(12,'aaa',0,'xxx','xxx','xxx',0,'2023-09-28 00:28:09.291785','2023-09-28 00:28:09.291785');",
    );
    await queryRunner.query(
      "INSERT INTO `booking`(`id`,`startTime`,`endTime`,`status`,`note`,`userId`,`roomId`,`createTime`,`updateTime`) VALUES (1,'2023-09-29 10:54:01','2023-09-29 11:54:01','审批通过','',1,3,'2023-09-29 03:06:54.088220','2023-11-17 01:58:53.000000'),(2,'2023-09-29 10:54:02','2023-09-29 11:54:02','审批驳回','',2,6,'2023-09-29 03:06:54.088220','2023-10-21 03:42:53.000000'),(3,'2023-09-29 11:54:02','2023-09-29 12:54:02','已解除','',2,3,'2023-09-29 03:06:54.088220','2023-11-19 01:10:49.741279'),(4,'2023-09-29 10:54:02','2023-09-29 11:54:02','审批通过','',1,6,'2023-09-29 03:06:54.088220','2023-11-19 02:30:58.000000'),(5,'2023-09-29 10:54:02','2023-09-29 11:54:02','审批通过','',8,11,'2023-09-29 03:06:54.088220','2023-11-19 02:30:58.000000'),(6,'2023-09-29 10:54:02','2023-09-29 11:54:02','已解除','',9,11,'2023-09-29 03:06:54.088220','2024-01-01 01:23:53.000000'),(7,'2023-09-29 10:54:02','2023-09-29 11:54:02','审批通过','',9,3,'2023-09-29 03:06:54.088220','2024-01-01 01:10:14.279639'),(8,'2023-09-29 10:54:02','2023-09-29 11:54:02','审批通过','',9,6,'2023-09-29 03:06:54.088220','2024-01-01 01:19:23.388907'),(13,'2023-12-31 09:40:59','2023-12-31 09:57:39','申请中','',1,11,'2023-12-31 04:34:38.917720','2024-01-01 01:08:53.884596'),(14,'2023-12-31 09:42:39','2023-12-31 10:14:19','申请中','',1,6,'2023-12-31 04:35:06.508185','2024-01-01 01:08:04.023433'),(15,'2024-01-01 11:00:00','2024-01-01 12:00:00','申请中','',1,3,'2024-01-01 02:43:26.920016','2024-01-01 02:43:26.920016'),(16,'2024-01-01 13:00:00','2024-01-01 14:00:00','申请中','',1,3,'2024-01-01 02:45:47.758012','2024-01-01 02:45:47.758012'),(17,'2024-01-01 15:00:00','2024-01-01 16:00:00','申请中','',1,3,'2024-01-01 02:46:39.654219','2024-01-01 02:46:39.654219');",
    );

    await queryRunner.query(
      "INSERT INTO `permissions` VALUES (7,'ccc','访问 ccc 接口'),(8,'ddd','访问 ddd 接口');",
    );
    await queryRunner.query(
      "INSERT INTO `roles` VALUES (7,'管理员'),(8,'普通用户');",
    );
    await queryRunner.query(
      'INSERT INTO `role_permissions` VALUES (7,7),(7,8),(8,7);',
    );
    await queryRunner.query('INSERT INTO `user_roles` VALUES (8,7),(9,8);');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('TRUNCATE TABLE booking');
  }
}
