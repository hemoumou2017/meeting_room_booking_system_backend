/*
 * @Author: 何欣 1254409474@qq.com
 * @Date: 2024-10-16 15:02:27
 * @LastEditors: 何欣 1254409474@qq.com
 * @LastEditTime: 2024-10-16 15:02:35
 * @FilePath: /nest学习/meeting_room_booking_system_backend/src/CustomTypeOrmLogger.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { WinstonLogger } from 'nest-winston';
import { Logger, QueryRunner } from 'typeorm';

export class CustomTypeOrmLogger implements Logger {
  constructor(private winstonLogger: WinstonLogger) {}

  log(level: 'log' | 'info' | 'warn', message: any) {
    this.winstonLogger.log(message);
  }

  logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner) {
    this.winstonLogger.log({
      sql: query,
      parameters,
    });
  }

  logQueryError(
    error: string | Error,
    query: string,
    parameters?: any[],
    queryRunner?: QueryRunner,
  ) {
    this.winstonLogger.error({
      sql: query,
      parameters,
    });
  }

  logQuerySlow(
    time: number,
    query: string,
    parameters?: any[],
    queryRunner?: QueryRunner,
  ) {
    this.winstonLogger.log({
      sql: query,
      parameters,
      time,
    });
  }

  logSchemaBuild(message: string, queryRunner?: QueryRunner) {
    this.winstonLogger.log(message);
  }

  logMigration(message: string, queryRunner?: QueryRunner) {
    this.winstonLogger.log(message);
  }
}
