import { OneToMany, Column, PrimaryGeneratedColumn, Entity } from "typeorm";
import { Comment } from "./comment.entity";


@Entity()
export class Topic {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @OneToMany((type)=>Comment, (comment)=>comment.topic)
    comments:Comment[];
}