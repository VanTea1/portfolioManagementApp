import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
     @Input() value : string = '';
     @Input() inputWidth : number = 0;
    @Output() valueChange = new EventEmitter<string>();
    
  onValueChange(model: string) {
        this.value = model;
        this.valueChange.emit(model);
  }
  
    isEditMode: boolean = false;

  switchEditMode() {
    this.isEditMode = !this.isEditMode;
  }

}
