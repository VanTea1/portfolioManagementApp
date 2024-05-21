import { Component } from '@angular/core';
import { EditComponent } from '../edit/edit.component';
import { IUser } from '../../models/User';
import {IBaseInfo} from '../../models/baseInfo';
import { NgClass, NgFor } from '@angular/common';
@Component({
  selector: 'app-base-info',
  standalone: true,
  imports: [EditComponent, NgClass, NgFor],
  templateUrl: './base-info.component.html',
  styleUrl: './base-info.component.scss'
})
export class BaseInfoComponent {
  userName: string = 'Enter name';
  position: string = 'Business Development Manager';

  baseInfo: IBaseInfo[] = [
    { index: 0, category: 'Main Emphasis', value: 'Java' },
    { index: 1, category: 'Availability', value: 'immediately' },
    { index: 2, category: 'Training', value: 'school' },
    { index: 3, category: 'Languages', value: 'English, German, ...' },
    { index: 4, category: 'Role', value: 'developer' }
  ];

  userInfo: IUser = {
    mail: 'asdasd@mail.com',
    tel:'123-123-123',
    address: 'Your location, Deutschland',
    linkedIn: 'linkedin/user',
  
  }
 avatarUrl: string | ArrayBuffer | null = null;

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
    this.baseInfo.push({ index: newIndex, category: 'New Category', value: 'New Value' });
  }

  deleteBaseInfo(index: number) {
    this.baseInfo.splice(index, 1);
    // After deletion, update the indices of remaining items
    this.baseInfo.forEach((item, i) => item.index = i);
  }
}
