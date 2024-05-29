import { Injectable } from '@angular/core';
import { IUserData } from './models/UserData';
import { IBaseInfo } from './models/baseInfo';
import { IUser } from './models/User';
import { ISkill } from './models/Skill';
import { IOtherCategory } from './models/OtherCategory';
import { IProject } from './models/Project';
import { BehaviorSubject } from 'rxjs';
import { IKnowledge } from './models/Knowledge';

@Injectable({
  providedIn: 'root',
})
export class ExportTransportService {
  private userDataSubject = new BehaviorSubject<IUserData>({
    userName: '',
    position: '',
    description: '',
    avatarUrl: null,
    baseInfo: [],
    userInfo: {
      mail: '',
      tel: '',
      address: '',
      linkedIn: '',
    },
    skills: [],
    knowledge: [],
    otherCategories: [],
    projects: [],
  });

  userData$ = this.userDataSubject.asObservable();

  constructor() {}

  setUserName(userName: string) {
    const currentData = this.userDataSubject.getValue();
    this.userDataSubject.next({ ...currentData, userName });
  }

  setPosition(position: string) {
    const currentData = this.userDataSubject.getValue();
    this.userDataSubject.next({ ...currentData, position });
  }
  setDescription(description: string) {
    const currentData = this.userDataSubject.getValue();
    this.userDataSubject.next({ ...currentData, description });
  }
  setAvatarUrl(avatarUrl: string | ArrayBuffer | null) {
    const currentData = this.userDataSubject.getValue();
    this.userDataSubject.next({ ...currentData, avatarUrl });
  }

  setBaseInfo(baseInfo: IBaseInfo[]) {
    const currentData = this.userDataSubject.getValue();
    this.userDataSubject.next({ ...currentData, baseInfo });
  }

  setUserInfo(userInfo: IUser) {
    const currentData = this.userDataSubject.getValue();
    this.userDataSubject.next({ ...currentData, userInfo });
  }

  setSkills(skills: ISkill[]) {
    const currentData = this.userDataSubject.getValue();
    this.userDataSubject.next({ ...currentData, skills });
  }
  setKnowledge(knowledge: IKnowledge[]) {
    const currentData = this.userDataSubject.getValue();
    this.userDataSubject.next({ ...currentData, knowledge });
  }

  setOtherCategories(otherCategories: IOtherCategory[]) {
    const currentData = this.userDataSubject.getValue();
    this.userDataSubject.next({ ...currentData, otherCategories });
  }

  setProjects(projects: IProject[]) {
    const currentData = this.userDataSubject.getValue();
    this.userDataSubject.next({ ...currentData, projects });
  }

  getUserData() {
    return this.userDataSubject.getValue();
  }
}
