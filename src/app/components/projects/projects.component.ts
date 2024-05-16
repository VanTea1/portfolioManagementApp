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

  projects: IProject[] = [{id:1, title:'type title',description:'type description'}];

  projectToAdd: IProject = { id: Math.floor(Math.random() * 1000), title: 'type title', description: 'type description' }

    addProject() {
      this.projects.push(this.projectToAdd);
      console.log('====================================');
      console.log(this.projects);
      console.log('====================================');
}
  deleteProject(index:number) {
    this.projects.splice(index, 1);
  }
  getProjectTitles(project: IProject): string[] {
    return Object.keys(project).filter(key => key !== 'id' && key !== 'title' && key !== 'description');
  }
  addProjectField(project:IProject) {
    const key = Math.floor(Math.random() * 1000).toString();
    project[key] = ['new title', 'new field'];
  }
  deleteProjectField(key:string, project:IProject) {
    delete project[key];
  }
}
