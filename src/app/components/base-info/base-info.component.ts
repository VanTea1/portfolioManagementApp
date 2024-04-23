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
  description: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis deleniti voluptatum odio accusamus repudiandae eos facilis sint, porro dolore voluptatem dolorem officia obcaecati, sed quasi exercitationem voluptate reiciendis, recusandae hic';

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
