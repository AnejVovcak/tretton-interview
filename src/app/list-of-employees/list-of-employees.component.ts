import {Component, Input} from '@angular/core';
import {Employee} from "../../interfaces/employee";

@Component({
  selector: 'app-list-of-employees',
  template: `
    <div class="grid grid-cols-1 h-28 gap-y-4 text-light-sky-blue">
      <div *ngFor="let employee of employees" class="flex flex-row items-center gap-x-1 border-2 p-2">
        <div class="w-16 h-16 overflow-hidden">
          <img *ngIf="employee.imagePortraitUrl"
               [src]="employee.imagePortraitUrl"
               [alt]="'employee'"
               class="rounded-full w-full h-full object-cover object-top">
          <img *ngIf="!employee.imagePortraitUrl" src="assets/stock_photo.jpg" class="rounded-full w-full h-full object-cover">
        </div>
        <div class="flex flex-row gap-x-2">
          <span>{{employee.name}}</span>
          <span>{{employee.area}}</span>
          <span>{{employee.office}}</span>
        </div>
      </div>
    </div>

  `,
  styles: [
  ]
})
export class ListOfEmployeesComponent {
  @Input() employees: Employee[];
}
