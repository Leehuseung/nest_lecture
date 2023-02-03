import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import {BoardE} from "../boards/board.entity";

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'test',
    password: 'test!',
    database: 'nest',
    entities: [BoardE],//__dirname + '/../**/*.entity.{js,ts}'
    synchronize: true,
    logging: false,
}