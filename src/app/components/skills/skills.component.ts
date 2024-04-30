
import { Component } from '@angular/core';
import { EditComponent } from "../edit/edit.component";
import { ISkill } from '../../models/Skill';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  imports: [EditComponent, NgClass, NgFor]
})
export class SkillsComponent {

  skills: ISkill[] = [ { name: 'SEO', level: [true, true, true, true, true, false] },
    { name: 'Public Speaking', level: [true, true, true, true, true, false] },
    { name: 'Teamwork', level: [true, true, true, true, true, false] },
    { name: 'Emotional Intelligence', level: [true, true, true, true, true, false] },
    { name: 'Sales & Marketing', level: [true, true, true, true, true, false] }];

  addSkill() {
    this.skills.push({ name: 'new skill', level: [true, true, true, true, true, false] });
}
  deleteSkill(index:number) {
    this.skills.splice(index, 1);
  }

  handleCheckboxClick( skillIndex: number, checkboxIndex: number) {
 

    for (let i = 0; i <= checkboxIndex; i++) {
      this.skills[skillIndex].level[i] = true;
    }
    for (let i = checkboxIndex + 1; i < this.skills[skillIndex].level.length; i++) {
      this.skills[skillIndex].level[i] = false;
    }
 }
}
