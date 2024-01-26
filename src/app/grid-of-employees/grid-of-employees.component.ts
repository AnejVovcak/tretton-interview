import {Component, Input, OnInit} from '@angular/core';
import {RestService} from "../../services/rest.service";
import {Employee} from "../../interfaces/employee";

@Component({
  selector: 'app-grid-of-employees',
  template: `
    <div class="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
      <div *ngFor="let employee of employees" class="flex flex-col gap-y-1 p-2 border-2 border-air-force-blue">
        <img *ngIf="employee.imagePortraitUrl" [src]="employee.imagePortraitUrl"
             [alt]="'employee'" class="w-full h-2/3 object-cover object-top">
        <img *ngIf="!employee.imagePortraitUrl" src="assets/stock_photo.jpg">
        <span>{{employee.name}}</span>
        <span>{{employee.area}}</span>
        <span>{{employee.office}}</span>
      </div>
    </div>
  `,
  styles: []
})
export class GridOfEmployeesComponent implements OnInit {

  @Input() employees: Employee[];

  ngOnInit(): void {
  }
}
