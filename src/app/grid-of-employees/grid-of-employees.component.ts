import {Component, Input, OnInit} from '@angular/core';
import {RestService} from "../../services/rest.service";
import {Employee} from "../../interfaces/employee";

@Component({
  selector: 'app-grid-of-employees',
  template: `
      <div class="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div *ngFor="let employee of employees"
               class="flex flex-col gap-y-4 p-2 border-2 border-air-force-blue shadow-xl bg-white">
              <img *ngIf="employee.imagePortraitUrl" [src]="employee.imagePortraitUrl"
                   [alt]="'employee'" class="w-full h-4/5 object-cover object-top">
              <img *ngIf="!employee.imagePortraitUrl" class="w-full h-4/5 object-cover object-top" src="assets/stock_photo.jpg">
              <div class="flex flex-col gap-y-2">
                  <div class="flex flex-row gap-x-0.5 -mb-2 items-center -ml-1">
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
                  <div class="flex flex-row gap-x-1 justify-between items-center">
                      <span class="text-air-force-blue font-extrabold">{{employee.name}}</span>
                      <div class="flex flex-row gap-x-1">
                          <a class="cursor-pointer" *ngIf="employee.linkedIn"
                             href="https://www.linkedin.com/{{employee.linkedIn}}"
                             target="_blank">
                              <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <g id="SVGRepo_iconCarrier">
                                      <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                                            fill="#90c2e7ff"></path>
                                      <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                                            fill="#90c2e7ff"></path>
                                      <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                                            fill="#90c2e7ff"></path>
                                      <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                                            fill="#90c2e7ff"></path>
                                  </g>
                              </svg>
                          </a>
                          <a class="cursor-pointer" *ngIf="employee.github" target="_blank"
                             href="https://github.com/{{employee.github}}">
                              <svg width="24px" height="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                                   fill="#000000">
                                  <g id="SVGRepo_iconCarrier">
                                      <desc>Created with Sketch.</desc>
                                      <defs></defs>
                                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                          <g id="Dribbble-Light-Preview"
                                             transform="translate(-140.000000, -7559.000000)"
                                             fill="#90c2e7ff">
                                              <g id="icons" transform="translate(56.000000, 160.000000)">
                                                  <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                                        id="github-[#142]"></path>
                                              </g>
                                          </g>
                                      </g>
                                  </g>
                              </svg>
                          </a>
                      </div>
                  </div>
                  <div class="flex flex-row gap-x-1">
                      <span class="text-french-gray">{{employee.primaryRole}}</span>
                  </div>
              </div>

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
