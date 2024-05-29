import { IKnowledge } from './Knowledge';
import { IOtherCategory } from './OtherCategory';
import { IProject } from './Project';
import { ISkill } from './Skill';
import { IUser } from './User';
import { IBaseInfo } from './baseInfo';

export interface IUserData {
  userName: string;
  position: string;
  description: string;
  avatarUrl: string | ArrayBuffer | null;
  baseInfo: IBaseInfo[];
  userInfo: IUser;
  skills: ISkill[];
  knowledge: IKnowledge[];
  otherCategories: IOtherCategory[];
  projects: IProject[];
}
