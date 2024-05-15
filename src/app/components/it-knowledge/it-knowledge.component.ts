import { Component } from '@angular/core';
import { EditComponent } from "../edit/edit.component";

@Component({
    selector: 'app-it-knowledge',
    standalone: true,
    templateUrl: './it-knowledge.component.html',
    styleUrl: './it-knowledge.component.scss',
    imports: [EditComponent]
})
export class ItKnowledgeComponent {
    frameworks: string = 'Angular';
    databases: string = "mySQL";
    buildSystems: string = "npm";
    tools: string = "Git, Figma";
    os: string = "Windows, Linux(Ubuntu)";
    devEnvironment: string = "VS Code";
    languages: string = "JavaScript, TypeScript, Java";
}
