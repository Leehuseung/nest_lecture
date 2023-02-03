
import {Injectable, NotFoundException, ParseUUIDPipe} from '@nestjs/common';
import {Board, BoardStatus} from "./board.model";
import {v1 as uuid} from 'uuid';
import {CreateBoardDto} from "./dto/create-board.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {BoardE} from "./board.entity";

//nest g service boards --no-spec
@Injectable()
export class BoardsService {
    private boards: Board[] = [];
    constructor(
        @InjectRepository(BoardE)
        private usersRepository: Repository<BoardE>,
    ) {}

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(createBoardDto: CreateBoardDto){
        const {title, description} = createBoardDto;
        const board: Board = {
            id: uuid(),
            title, // title:title -> title로 표현 가능
            description,
            status: BoardStatus.PUBLIC
        }
        this.boards.push(board);
        return board;
    }

    getBoardById(id: string): Board{
        const found = this.boards.find((board) => board.id === id);

        if(!found) {
            throw new NotFoundException(`Can't find Board with id ${id}`);
        }

        return found;
    }

    deleteBoard(id: string): void {
        const found = this.getBoardById(id);
        this.boards = this.boards.filter((board) => board.id !== id);
    }

    updateBoardStatus(id:string, status: BoardStatus): Board {
        const board = this.getBoardById(id);
        board.status = status;
        return board;
    }

}
