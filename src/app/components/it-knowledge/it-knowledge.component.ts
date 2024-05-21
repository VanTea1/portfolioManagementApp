import { Component } from '@angular/core';
import { EditComponent } from "../edit/edit.component";
import { IKnowledge } from '../../models/Knowledge';
import { NgClass, NgFor } from '@angular/common';

@Component({
    selector: 'app-it-knowledge',
    standalone: true,
    templateUrl: './it-knowledge.component.html',
    styleUrl: './it-knowledge.component.scss',
    imports: [EditComponent, NgClass, NgFor]
})
export class ItKnowledgeComponent {
      
       knowledge: IKnowledge[] = [
        { index: 0, category: 'Frameworks', items: 'Angular' },
        { index: 1, category: 'Databases', items: 'mySQL' },
        { index: 2, category: 'Build Systems', items: 'npm' },
        { index: 3, category: 'Tools', items: 'Git, Figma' },
        { index: 4, category: 'OS', items: 'Windows, Linux(Ubuntu)' },
        { index: 5, category: 'Dev Environment', items: 'VS Code' },
        { index: 6, category: 'Languages', items: 'JavaScript, TypeScript, Java' },
      ];

      addKnowledge() {
        const newIndex = this.knowledge.length; 
        this.knowledge.push({ index: newIndex, category: 'New Category', items: 'New Item' });
      }
    
      deleteKnowledge(index: number) {
        this.knowledge.splice(index, 1);
        this.knowledge.forEach((item, i) => item.index = i);
      }
}

