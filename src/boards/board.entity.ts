import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {BoardStatus} from "./board.model";
@Entity()
export class BoardE {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: BoardStatus;
}