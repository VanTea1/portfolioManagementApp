import { Component } from '@angular/core';
import { IOtherCategory } from '../../models/OtherCategory';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-other-skills-category',
  standalone: true,
  templateUrl: './other-skills-category.component.html',
  styleUrl: './other-skills-category.component.scss',
  imports: [EditComponent],
})
export class OtherSkillsCategoryComponent {
  otherCategories: IOtherCategory[] = [];

  addCategory() {
    this.otherCategories.push({
      title: 'New Category',
      items: ['new tittle', 'new description'],
    });
  }

  getCategoryItems(category: IOtherCategory): string[] {
    return Object.keys(category).filter((key) => key !== 'title');
  }

  addCategoryField(category: IOtherCategory) {
    const key = Math.floor(Math.random() * 1000).toString();
    category[key] = ['new title', 'new description'];
  }

  deleteCategoryField(key: string, category: IOtherCategory) {
    delete category[key];
  }

  deleteCategory(index: number) {
    this.otherCategories.splice(index, 1);
  }
}
