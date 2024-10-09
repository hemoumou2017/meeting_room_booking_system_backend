/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-10-09 14:25:12
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-10-09 15:33:57
 * @FilePath: /meeting_room_booking_system_backend/src/meeting-room/meeting-room.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateMeetingRoomDto } from './dto/create-meeting-room.dto';
import { UpdateMeetingRoomDto } from './dto/update-meeting-room.dto';
import {
  InjectDataSource,
  InjectEntityManager,
  InjectRepository,
} from '@nestjs/typeorm';
import { MeetingRoom } from './entities/meeting-room.entity';
import { EntityManager, Like, Repository } from 'typeorm';
import { Booking } from 'src/booking/entities/booking.entity';

@Injectable()
export class MeetingRoomService {
  @InjectRepository(MeetingRoom)
  private repository: Repository<MeetingRoom>;

  @InjectEntityManager()
  entityManager: EntityManager;

  initData() {
    const room1 = new MeetingRoom();
    room1.name = '木星';
    room1.capacity = 10;
    room1.equipment = '白板';
    room1.location = '一层西';

    const room2 = new MeetingRoom();
    room2.name = '金星';
    room2.capacity = 5;
    room2.equipment = '';
    room2.location = '二层东';

    const room3 = new MeetingRoom();
    room3.name = '天王星';
    room3.capacity = 30;
    room3.equipment = '白板，电视';
    room3.location = '三层东';

    this.repository.insert([room1, room2, room3]);
  }
  async create(meetingRoomDto: CreateMeetingRoomDto) {
    const room = await this.repository.findOneBy({ name: meetingRoomDto.name });

    if (room) {
      throw new BadGatewayException('会议室已存在');
    }

    return await this.repository.save(meetingRoomDto);
  }

  async find(
    pageNo: number,
    pageSize: number,
    name: string,
    capacity: number,
    equipment: string,
  ) {
    if (pageNo < 1) {
      throw new BadGatewayException('pageNo must be greater than 0');
    }
    const skipCount = (pageNo - 1) * pageSize;

    const condition: Record<string, any> = {};
    if (name) {
      condition.name = Like(`%${name}%`);
    }
    if (equipment) {
      condition.equipment = Like(`%${equipment}%`);
    }

    if (capacity) {
      condition.capacity = capacity;
    }
    const [meetingRooms, totalCount] = await this.repository.findAndCount({
      skip: skipCount,
      take: pageSize,
      where: condition,
    });

    return {
      meetingRooms,
      totalCount,
    };
  }

  findAll() {
    return `This action returns all meetingRoom`;
  }

  findOne(id: number) {
    return `This action returns a #${id} meetingRoom`;
  }

  async update(updateMeetingRoomDto: UpdateMeetingRoomDto) {
    const meetingRoom = await this.repository.findOneBy({
      id: updateMeetingRoomDto.id,
    });
    if (!meetingRoom) {
      throw new BadGatewayException('会议室不存在');
    }

    meetingRoom.capacity = updateMeetingRoomDto.capacity;
    meetingRoom.name = updateMeetingRoomDto.name;
    meetingRoom.location = updateMeetingRoomDto.location;

    if (updateMeetingRoomDto.description) {
      meetingRoom.description = updateMeetingRoomDto.description;
    }
    if (updateMeetingRoomDto.equipment) {
      meetingRoom.equipment = updateMeetingRoomDto.equipment;
    }

    await this.repository.update(
      {
        id: meetingRoom.id,
      },
      meetingRoom,
    );

    return 'success';
  }

  async delete(id: number) {
    const bookings = await this.entityManager.findBy(Booking, {
      room: {
        id: id,
      },
    });

    for (let i = 0; i < bookings.length; i++) {
      this.entityManager.delete(Booking, bookings[i].id);
    }

    await this.repository.delete({ id });

    return 'success';
  }

  async findById(id: number) {
    return this.repository.findOneBy({ id });
  }
}
