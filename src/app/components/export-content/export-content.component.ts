import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExportTransportService } from '../../export-transport.service';
import { IUserData } from '../../models/UserData';
import { Subscription } from 'rxjs';
import { IProject } from '../../models/Project';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-export-content',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './export-content.component.html',
  styleUrl: './export-content.component.scss',
})
export class ExportContentComponent implements OnInit, OnDestroy {
  userData: IUserData = {
    userName: '',
    position: '',
    description: '',
    avatarUrl: null,
    baseInfo: [],
    userInfo: {
      mail: '',
      tel: '',
      address: '',
      linkedIn: '',
    },
    skills: [],
    knowledge: [],
    otherCategories: [],
    projects: [],
  };
  private subscription?: Subscription;
  constructor(private transportUserDataService: ExportTransportService) {}

  ngOnInit() {
    this.subscription = this.transportUserDataService.userData$.subscribe(
      (data) => (this.userData = data)
    );
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
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
}
