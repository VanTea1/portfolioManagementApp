import { Component, DoCheck, KeyValueDiffers, OnInit } from '@angular/core';
import { EditComponent } from '../edit/edit.component';
import { IUser } from '../../models/User';
import { IBaseInfo } from '../../models/baseInfo';
import { NgClass, NgFor } from '@angular/common';
import { ExportTransportService } from '../../export-transport.service';
@Component({
  selector: 'app-base-info',
  standalone: true,
  imports: [EditComponent, NgClass, NgFor],
  templateUrl: './base-info.component.html',
  styleUrl: './base-info.component.scss',
})
export class BaseInfoComponent implements DoCheck, OnInit {
  userName: string = 'Enter name';
  position: string = 'Business Development Manager';
  description: string =
    'A software developer with innovative ideas and a love for coding...';

  baseInfo: IBaseInfo[] = [
    { index: 0, category: 'Main Emphasis', value: 'Java' },
    { index: 1, category: 'Availability', value: 'immediately' },
    { index: 2, category: 'Education', value: 'school' },
    { index: 3, category: 'Languages', value: 'English, German, ...' },
    { index: 4, category: 'Role', value: 'developer' },
    { index: 5, category: 'Industry', value: 'Medicine' },
    { index: 6, category: 'Year of birth', value: '1987' },
  ];

  userInfo: IUser = {
    mail: 'asdasd@mail.com',
    tel: '123-123-123',
    address: 'Your location, Deutschland',
    linkedIn: 'linkedin/user',
  };
  avatarUrl: string | ArrayBuffer | null = null;

  private differ: any = this.differs.find(this).create();

  constructor(
    private transportUserDataService: ExportTransportService,
    private differs: KeyValueDiffers
  ) {}

  ngOnInit() {
    this.transportUserDataService.setUserName(this.userName);
    this.transportUserDataService.setPosition(this.position);
    this.transportUserDataService.setDescription(this.description);
    this.transportUserDataService.setBaseInfo(this.baseInfo);
    this.transportUserDataService.setUserInfo(this.userInfo);
  }

  ngDoCheck() {
    const changes = this.differ.diff(this);
    if (changes) {
      changes.forEachChangedItem((record: any) => {
        this.updateUserData(record.key);
      });
    }
  }

  updateUserData(key: string) {
    switch (key) {
      case 'userName':
        this.transportUserDataService.setUserName(this.userName);
        break;
      case 'position':
        this.transportUserDataService.setPosition(this.position);
        break;
      case 'description':
        this.transportUserDataService.setDescription(this.description);
        break;
      case 'avatarUrl':
        this.transportUserDataService.setAvatarUrl(this.avatarUrl);
        break;
      case 'baseInfo':
        this.transportUserDataService.setBaseInfo(this.baseInfo);
        break;
      case 'userInfo':
        this.transportUserDataService.setUserInfo(this.userInfo);
        break;
      default:
        console.warn(`Unknown property: ${key}`);
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.avatarUrl = reader.result;
      };
    }
  }

  addBaseInfo() {
    const newIndex = this.baseInfo.length;
    this.baseInfo.push({
      index: newIndex,
      category: 'New Category',
      value: 'New Value',
    });
  }

  deleteBaseInfo(index: number) {
    this.baseInfo.splice(index, 1);
    // After deletion, update the indices of remaining items
    this.baseInfo.forEach((item, i) => (item.index = i));
  }
}
