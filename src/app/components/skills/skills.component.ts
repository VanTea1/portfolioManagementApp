
import { Component } from '@angular/core';
import { EditComponent } from "../edit/edit.component";

@Component({
    selector: 'app-skills',
    standalone: true,
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss',
    imports: [EditComponent]
})
export class SkillsComponent {

skills: string[] = ['SEO','Public Speaking', 'Teamwork', 'Emotional Intelligence', 'Sales & Marketing']

  addSkill() {
    this.skills.push('new skill');
}
  deleteSkill(index:number) {
    this.skills.splice(index, 1);
}
}
