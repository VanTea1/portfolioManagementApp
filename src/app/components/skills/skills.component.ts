import { Component, KeyValueDiffers } from '@angular/core';
import { EditComponent } from '../edit/edit.component';
import { ISkill } from '../../models/Skill';
import { NgClass, NgFor } from '@angular/common';
import { ExportTransportService } from '../../export-transport.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  imports: [EditComponent, NgClass, NgFor],
})
export class SkillsComponent {
  skills: ISkill[] = [
    {
      name: 'SEO',
      level: [true, true, true, true, true, true, true, true, true, false],
    },
    {
      name: 'Public Speaking',
      level: [true, true, true, true, false, false, false, false, false, false],
    },
    {
      name: 'Teamwork',
      level: [true, true, true, true, true, true, true, false, false, false],
    },
    {
      name: 'Emotional Intelligence',
      level: [true, true, true, true, false, false, false, false, false, false],
    },
    {
      name: 'Sales & Marketing',
      level: [true, true, true, true, true, true, true, true, false, false],
    },
  ];

  private differ: any = this.differs.find(this).create();

  constructor(
    private transportUserDataService: ExportTransportService,
    private differs: KeyValueDiffers
  ) {}

  ngOnInit() {
    this.transportUserDataService.setSkills(this.skills);
  }

  ngDoCheck() {
    const changes = this.differ.diff(this);
    if (changes) {
      changes.forEachChangedItem((record: any) => {
        this.transportUserDataService.setSkills(this.skills);
      });
    }
  }

  addSkill() {
    this.skills.push({
      name: 'new skill',
      level: [true, true, true, true, true, true, true, true, true, true],
    });
  }
  deleteSkill(index: number) {
    this.skills.splice(index, 1);
  }

  handleCheckboxClick(skillIndex: number, checkboxIndex: number) {
    for (let i = 0; i <= checkboxIndex; i++) {
      this.skills[skillIndex].level[i] = true;
    }
    for (
      let i = checkboxIndex + 1;
      i < this.skills[skillIndex].level.length;
      i++
    ) {
      this.skills[skillIndex].level[i] = false;
    }
  }
}
