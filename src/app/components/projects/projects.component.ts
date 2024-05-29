import { Component, DoCheck, KeyValueDiffers, OnInit } from '@angular/core';
import { EditComponent } from '../edit/edit.component';
import { IProject } from '../../models/Project';
import { ExportTransportService } from '../../export-transport.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  imports: [EditComponent],
})
export class ProjectsComponent implements OnInit, DoCheck {
  projects: IProject[] = [
    {
      id: 1,
      title: 'Project Medical',
      description: 'This project can....',
      industry: 'Medical field',
      timeperiod: '3 months',
      teamsize: '1',
      role: 'developer',
      tasks: 'coding',
      environment: 'VS Code',
      framework: 'Angular',
      buildtools: 'npm',
      language: 'TypeScript',
      os: 'Win10',
    },
  ];

  projectToAdd: IProject = {
    id: Math.floor(Math.random() * 1000),
    title: 'Project Medical',
    description: 'This project can....',
    industry: 'Medical field',
    timeperiod: '3 months',
    teamsize: '1',
    role: 'developer',
    tasks: 'coding',
    environment: 'VS Code',
    framework: 'Angular',
    buildtools: 'npm',
    language: 'TypeScript',
    os: 'Win10',
  };

  private differ: any = this.differs.find(this).create();

  constructor(
    private transportUserDataService: ExportTransportService,
    private differs: KeyValueDiffers
  ) {}

  ngOnInit() {
    this.transportUserDataService.setProjects(this.projects);
  }

  ngDoCheck() {
    const changes = this.differ.diff(this);
    if (changes) {
      changes.forEachChangedItem((record: any) => {
        this.transportUserDataService.setProjects(this.projects);
      });
    }
  }

  addProject() {
    this.projects.push(this.projectToAdd);
  }
  deleteProject(index: number) {
    this.projects.splice(index, 1);
  }
  getProjectTitles(project: IProject): string[] {
    return Object.keys(project).filter(
      (key) =>
        key !== 'id' &&
        key !== 'title' &&
        key !== 'description' &&
        key !== 'industry' &&
        key !== 'timeperiod' &&
        key !== 'teamsize' &&
        key !== 'role' &&
        key !== 'framework' &&
        key !== 'buildtools' &&
        key !== 'language' &&
        key !== 'os' &&
        key !== 'tasks' &&
        key !== 'environment'
    );
  }
  addProjectField(project: IProject) {
    const key = Math.floor(Math.random() * 1000).toString();
    project[key] = ['new title', 'new field'];
  }
  deleteProjectField(key: string, project: IProject) {
    delete project[key];
  }
}
