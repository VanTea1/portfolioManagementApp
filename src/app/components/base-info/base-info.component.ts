import { Component } from '@angular/core';
import { EditComponent } from '../edit/edit.component';
import { IUser } from '../../models/User';

@Component({
  selector: 'app-base-info',
  standalone: true,
  imports: [EditComponent],
  templateUrl: './base-info.component.html',
  styleUrl: './base-info.component.scss'
})
export class BaseInfoComponent {
  userName: string = 'Enter name';
  position: string = 'Business Development Manager';
  mainEmphasis: string = "Java";
  availability: string = "immediately";
  training: string = "school";
  languages: string = "English, German, ...";
  role: string = "developer";

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


}
