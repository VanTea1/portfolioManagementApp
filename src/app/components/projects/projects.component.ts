import { Component } from '@angular/core';
import { EditComponent } from "../edit/edit.component";
import { IProject } from '../../models/Project';

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
    imports: [EditComponent]
})
export class ProjectsComponent {

  projects: IProject[] = [{id:1, title:'type title',description:'type description', teamsize: '1', role: 'developer', tasks: 'coding', environment: "VS Code",
    framework:"Angular", buildtools:"npm", language:"TypeScript", technical:"Win10"
   }];

  projectToAdd: IProject = { id: Math.floor(Math.random() * 1000), title: 'type title', description: 'type description', teamsize: '1', role: 'developer', tasks: 'coding', environment: "VS Code",
  framework:"Angular", buildtools:"npm", language:"TypeScript", technical:"Win10"}

  //when the newly added array items get added, they also get added as a single letter item which can be deleted, it looks weird?
  //seems to clash with how Ruslan created it, need to inquire how he did it and if he can fix it
  //my items get added as the title and desc but also as new fields (only using the first letter for that though)
  
    addProject() {
    this.projects.push(this.projectToAdd);
}
  deleteProject(index:number) {
    this.projects.splice(index, 1);
  }
  getProjectTitles(project: IProject): string[] {
    return Object.keys(project).filter(key => key !== 'id' && key !== 'title' && key !== 'description' && key !== 'teamsize' && key !== 'role' && key !== 'framework' && key !== 'buildtools' && key !== 'language' && key !== 'technical' && key !== 'tasks' && key !== 'environment');
  }
  addProjectField(project:IProject) {
    const key = Math.floor(Math.random() * 1000).toString();
    project[key] = ['new title', 'new field'];
  }
  deleteProjectField(key:string, project:IProject) {
    delete project[key];
  }
}
