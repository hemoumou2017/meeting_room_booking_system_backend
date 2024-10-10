/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-10-09 14:25:12
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-10-10 15:42:49
 * @FilePath: /meeting_room_booking_system_backend/src/meeting-room/meeting-room.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-10-09 14:25:12
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-10-10 15:41:43
 * @FilePath: /meeting_room_booking_system_backend/src/meeting-room/meeting-room.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-10-09 14:25:12
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-10-10 15:35:48
 * @FilePath: /meeting_room_booking_system_backend/src/meeting-room/meeting-room.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-10-09 14:25:12
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-10-09 15:01:33
 * @FilePath: /meeting_room_booking_system_backend/src/meeting-room/meeting-room.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  DefaultValuePipe,
  Put,
  HttpStatus,
} from '@nestjs/common';
import { MeetingRoomService } from './meeting-room.service';
import { CreateMeetingRoomDto } from './dto/create-meeting-room.dto';
import { UpdateMeetingRoomDto } from './dto/update-meeting-room.dto';
import { gernerateParseIntPipe } from 'src/utils';
import {
  ApiBearerAuth,
  ApiBody,
  ApiParam,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
import { RequireLogin } from 'src/custom.decorator';
import { MeetingRoomVo } from './vo/meeting-room.vo';
import { MeetingRoomListVo } from './vo/meeting-room-list.vo';

@Controller('meeting-room')
export class MeetingRoomController {
  constructor(private readonly meetingRoomService: MeetingRoomService) {}

  @ApiBearerAuth()
  @ApiQuery({
    name: 'pageNo',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'pageSize',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'name',
    type: String,
    required: false,
  })
  @ApiQuery({
    name: 'capacity',
    type: String,
    required: false,
  })
  @ApiQuery({
    name: 'equipment',
    type: String,
    required: false,
  })
  @ApiResponse({
    type: MeetingRoomListVo,
  })
  @Get('list')
  async list(
    @Query('pageNo', new DefaultValuePipe(1), gernerateParseIntPipe('pageNo'))
    pageNo: number,
    @Query('pageSize', new DefaultValuePipe(2), gernerateParseIntPipe('pageNo'))
    pageSize: number,
    @Query('name') name: string,
    @Query('capacity') capacity: number,
    @Query('equipment') equipment: string,
  ) {
    return await this.meetingRoomService.find(
      pageNo,
      pageSize,
      name,
      capacity,
      equipment,
    );
  }

  @ApiBearerAuth()
  @ApiBody({
    type: CreateMeetingRoomDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: '会议室名字已存在',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: MeetingRoomVo,
  })
  @Post('create')
  async create(@Body() meetingRoomDto: CreateMeetingRoomDto) {
    return await this.meetingRoomService.create(meetingRoomDto);
  }
  @ApiBearerAuth()
  @ApiBody({
    type: UpdateMeetingRoomDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: '会议室不存在',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
  })
  @Put('update')
  async update(@Body() meetingRoomDto: UpdateMeetingRoomDto) {
    return await this.meetingRoomService.update(meetingRoomDto);
  }

  @Get()
  findAll() {
    return this.meetingRoomService.findAll();
  }

  @ApiBearerAuth()
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'id',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
    type: MeetingRoomVo,
  })
  @Get(':id')
  find(@Param('id') id: number) {
    return this.meetingRoomService.findById(id);
  }

  @ApiParam({
    name: 'id',
    type: Number,
    description: 'id',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'success',
  })
  @ApiBearerAuth()
  @RequireLogin()
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.meetingRoomService.delete(id);
  }
}
