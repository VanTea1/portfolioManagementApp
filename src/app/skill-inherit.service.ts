import { Injectable } from '@angular/core';
import { IKnowledge } from './models/Knowledge';



@Injectable({
  providedIn: 'root'
})
export class SkillInheritService {
  public knowledgeSource: IKnowledge[] = [];


  constructor() { }

  setKnowledge(knowledge: IKnowledge[]) {
    this.knowledgeSource = knowledge;
  }

  getKnowledge(): IKnowledge[] {
    return this.knowledgeSource;
  }
}
