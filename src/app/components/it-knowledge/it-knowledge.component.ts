import { Component, DoCheck, KeyValueDiffers, OnInit } from '@angular/core';
import { EditComponent } from '../edit/edit.component';
import { IKnowledge } from '../../models/Knowledge';
import { NgClass, NgFor } from '@angular/common';
import { ExportTransportService } from '../../export-transport.service';

@Component({
  selector: 'app-it-knowledge',
  standalone: true,
  templateUrl: './it-knowledge.component.html',
  styleUrl: './it-knowledge.component.scss',
  imports: [EditComponent, NgClass, NgFor],
})
export class ItKnowledgeComponent implements OnInit, DoCheck {
  knowledge: IKnowledge[] = [
    { index: 0, category: 'Frameworks', items: 'Angular' },
    { index: 1, category: 'Databases', items: 'mySQL' },
    { index: 2, category: 'Build Systems', items: 'npm' },
    { index: 3, category: 'Tools', items: 'Git, Figma' },
    { index: 4, category: 'OS', items: 'Windows, Linux(Ubuntu)' },
    { index: 5, category: 'Dev Environment', items: 'VS Code' },
    { index: 6, category: 'Languages', items: 'JavaScript, TypeScript, Java' },
  ];

  private differ: any = this.differs.find(this).create();

  constructor(
    private transportUserDataService: ExportTransportService,
    private differs: KeyValueDiffers
  ) {}

  ngOnInit() {
    this.transportUserDataService.setKnowledge(this.knowledge);
  }

  ngDoCheck() {
    const changes = this.differ.diff(this);
    if (changes) {
      changes.forEachChangedItem((record: any) => {
        this.transportUserDataService.setKnowledge(this.knowledge);
      });
    }
  }

  addKnowledge() {
    const newIndex = this.knowledge.length;
    this.knowledge.push({
      index: newIndex,
      category: 'New Category',
      items: 'New Item',
    });
  }

  deleteKnowledge(index: number) {
    this.knowledge.splice(index, 1);
    this.knowledge.forEach((item, i) => (item.index = i));
  }
}
