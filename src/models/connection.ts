import mysql2 from 'mysql2';
import { Sequelize } from 'sequelize-typescript';
import { dbConfig } from '../config/config';
import { User } from './User';
import { UserPost } from './UserPost';
import { UserFriend } from './UserFriend';
import { UserMessage } from './UserMessage';
import { UserFollower } from './UserFollower';
import { Group } from './Group';
import { GroupFollower } from './GroupFollower';
import { GroupMember } from './GroupMember';
import { GroupMessage } from './GroupMessage';
import { GroupPost } from './GroupPost';
import { ProfileGroup } from './ProfileGroup';
import { ProfileUser } from './ProfileUser';
import { UserContact } from './UserContact';
import { UserEvent } from './UserEvent';
import { UserFavorite } from './UserFavorite';
import { UserSchool } from './UserSchool';
import { UserWork } from './UserWork';
import { CommentPost } from './CommentPost';
import { GroupEvent } from './GroupEvent';
import { LikePost } from './LikePost';

const sequelize = new Sequelize({
  host: dbConfig?.host,
  username: dbConfig?.username,
  password: dbConfig?.password,
  database: dbConfig?.database,
  dialect: 'mysql',
  dialectModule: mysql2,
  logging: false,
  dialectOptions: {
    ssl: {
      required: false
    }
  },
  define: {
    timestamps: false
  },
  timezone: '+07:00'
});

sequelize.addModels([
  User,
  UserPost,
  UserFollower,
  UserFriend,
  UserMessage,
  Group,
  GroupFollower,
  GroupMember,
  GroupMessage,
  GroupPost,
  ProfileGroup,
  ProfileUser,
  UserContact,
  UserEvent,
  UserFavorite,
  UserSchool,
  UserWork,
  LikePost,
  CommentPost,
  GroupEvent
]);

export const initDB = async () => {
  await sequelize.authenticate();
  await sequelize.sync({ alter: true });
};

export {
  User,
  UserPost,
  UserFollower,
  UserFriend,
  UserMessage,
  Group,
  GroupFollower,
  GroupMember,
  GroupMessage,
  GroupPost,
  ProfileGroup,
  ProfileUser,
  UserContact,
  UserEvent,
  UserFavorite,
  UserSchool,
  UserWork,
  LikePost,
  CommentPost,
  GroupEvent
};
