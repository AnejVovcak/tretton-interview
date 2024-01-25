import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Employee} from "../../interfaces/employee";

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styles: [
  ]
})
export class ToolBarComponent {

  @Input() employees: Employee[];
  @Output() filterEmployees = new EventEmitter<Employee[]>();

  listToggle: boolean = false;

  sortByName() {
    this.filterEmployees.emit(this.employees.sort((a, b) => a.name.localeCompare(b.name)));
  }

  sortByOffice() {
    this.filterEmployees.emit(this.employees.sort((a, b) => a.office.localeCompare(b.office)));
  }


}
