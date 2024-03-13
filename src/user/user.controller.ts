import { Body, Controller, Put, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {

    constructor(private readonly userService:UserService, private readonly commentService:CommentService){} 

    @Get(':id')
    findOne(@Param("id") id:number) {
        
        return this.userService.findOne(id);

    }

    @Post()
    create(@Body() CreateUserDto: CreateUserDto) {
        return this.userService.create(CreateUserDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get(":id/comments")
    getUserComment(@Param("id") id:string) {
        return this.commentService.findUserComments(id);
    }

    @Put(":id")
    update(@Param("id") id:number, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

}
