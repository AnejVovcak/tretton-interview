import {Component, Input} from '@angular/core';
import {Employee} from "../../interfaces/employee";

@Component({
  selector: 'app-office-component',
  template : `
  <div class="flex flex-row gap-x-0.5 items-center">
                      <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_iconCarrier">
                              <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                                    stroke="#a31621ff" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                              <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                                    stroke="#a31621ff" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                          </g>
                      </svg>
                      <span class="text-sm text-madder">{{employee.office}}{{employee.area ? ', ' : ''}}
                          <span class="text-sm text-madder" *ngIf="employee.area">{{employee.area}}</span>
                      </span>
                  </div>
                  `
})
export class OfficeComponent {
  @Input() employee: Employee;
}

@Component({
  selector: 'app-list-of-employees',
  template: `
      <div class="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 h-28 gap-4">
          <div *ngFor="let employee of employees"
               class="flex flex-row border-air-force-blue shadow-xl bg-white items-center gap-x-1 border-2 p-2">
              <div class="w-16 h-16 overflow-hidden pr-2">
                  <img [src]="employee.imagePortraitUrl ? employee.imagePortraitUrl : 'assets/stock_photo.jpg'"
                       [alt]="'employee'"
                       class="rounded-full w-full h-full object-cover object-top border-2 border-air-force-blue">
              </div>
              <div class="flex flex-row gap-x-4 justify-between">
                  <div class="flex flex-col gap-y-1">
                      <div class="text-air-force-blue font-extrabold -mb-1">{{employee.name}}</div>
                      <div class="text-sm text-air-force-blue">{{employee.primaryRole}}</div>
                  </div>
                  <app-office-component class="flex items-center" [employee]="employee"></app-office-component>
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
