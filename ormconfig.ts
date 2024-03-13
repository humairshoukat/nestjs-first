import { Topic } from "src/entities/topic.entity";
import { User } from "src/entities/user.entity";
import { Comment } from "src/entities/comment.entity";
import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'testDB',
    entities: [User, Topic, Comment],
    synchronize: true,
};

export default config;