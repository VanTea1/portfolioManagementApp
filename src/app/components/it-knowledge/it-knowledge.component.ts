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
        { category: 'Frameworks', items: 'Angular' },
        { category: 'Databases', items: 'mySQL' },
        { category: 'Build Systems', items: 'npm' },
        { category: 'Tools', items: 'Git, Figma' },
        { category: 'OS', items: 'Windows, Linux(Ubuntu)' },
        { category: 'Dev Environment', items: 'VS Code' },
        { category: 'Languages', items: 'JavaScript, TypeScript, Java' },
      ];

    addKnowledge() {
        this.knowledge.push({ category: 'new skill', items: 'new item' });
    }
    deleteKnowledge(index: number) {
        this.knowledge.splice(index, 1);
    }
}

