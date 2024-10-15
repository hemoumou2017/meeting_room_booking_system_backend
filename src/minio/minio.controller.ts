/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-10-15 15:53:49
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-10-15 16:35:01
 * @FilePath: /nest学习/meeting_room_booking_system_backend/src/minio/minio.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Controller, Get, Inject, Query } from '@nestjs/common';
import * as Minio from 'minio';

@Controller('minio')
export class MinioController {
  @Inject('MINIO_CLIENT')
  private minioClient: Minio.Client;

  @Get('presignedUrl')
  presignedPutObject(@Query('name') name: string) {
    console.log(name, 'name');
    return this.minioClient.presignedPutObject(
      'meeting-room-booking-system',
      name,
      3600,
    );
  }
}
