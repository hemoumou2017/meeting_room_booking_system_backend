/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-10-09 14:25:12
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-10-09 14:43:49
 * @FilePath: /meeting_room_booking_system_backend/src/meeting-room/entities/meeting-room.entity.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class MeetingRoom {
  @PrimaryGeneratedColumn({
    comment: '会议室ID',
  })
  id: number;

  @Column({
    comment: '会议室名称',
  })
  name: string;

  @Column({
    comment: '会议室容量',
  })
  capacity: number;

  @Column({
    length: 50,
    comment: '会议室位置',
  })
  location: string;

  @Column({
    length: 50,
    comment: '设备',
    default: '',
  })
  equipment: string;

  @Column({
    length: 100,
    comment: '描述',
    default: '',
  })
  description: string;

  @Column({
    comment: '是否被预订',
    default: false,
  })
  isBooked: boolean;

  @CreateDateColumn({
    comment: '创建时间',
  })
  createTime: Date;

  @UpdateDateColumn({
    comment: '更新时间',
  })
  updateTime: Date;
}
