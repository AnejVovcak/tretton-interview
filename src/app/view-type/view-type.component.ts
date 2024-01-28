import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-view-type',
  template: `
    <div class="flex flex-row">
      <div class="flex flex-row gap-x-2">
        <svg width="24px" height="24px" [attr.data-selected]="listToggleValue" (click)="emitListToggle()"
             class="data-[selected=true]:fill-air-force-blue data-[selected=false]:fill-french-gray
           data-[selected=true]:stroke-air-force-blue data-[selected=false]:stroke-french-gray
            cursor-pointer"
             viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_iconCarrier">
            <path
              d="M8 6.00067L21 6.00139M8 12.0007L21 12.0015M8 18.0007L21 18.0015M3.5 6H3.51M3.5 12H3.51M3.5 18H3.51M4 6C4 6.27614 3.77614 6.5 3.5 6.5C3.22386 6.5 3 6.27614 3 6C3 5.72386 3.22386 5.5 3.5 5.5C3.77614 5.5 4 5.72386 4 6ZM4 12C4 12.2761 3.77614 12.5 3.5 12.5C3.22386 12.5 3 12.2761 3 12C3 11.7239 3.22386 11.5 3.5 11.5C3.77614 11.5 4 11.7239 4 12ZM4 18C4 18.2761 3.77614 18.5 3.5 18.5C3.22386 18.5 3 18.2761 3 18C3 17.7239 3.22386 17.5 3.5 17.5C3.77614 17.5 4 17.7239 4 18Z"
              class="fill-light-sky-blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
        </svg>

        <svg width="24px" height="24px" viewBox="0 -0.5 21 21" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg"
             (click)="emitListToggle()">
          <g id="SVGRepo_iconCarrier">
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Dribbble-Light-Preview" transform="translate(-59.000000, -240.000000)"
                 [attr.data-selected]="!listToggleValue"
                 class="data-[selected=true]:fill-air-force-blue data-[selected=false]:fill-french-gray">
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M16.65,98 L21.9,98 L21.9,93 L16.65,93 L16.65,98 Z M14.55,100 L24,100 L24,91 L14.55,91 L14.55,100 Z M5.1,98 L10.35,98 L10.35,93 L5.1,93 L5.1,98 Z M3,100 L12.45,100 L12.45,91 L3,91 L3,100 Z M16.65,87 L21.9,87 L21.9,82 L16.65,82 L16.65,87 Z M14.55,89 L24,89 L24,80 L14.55,80 L14.55,89 Z M5.1,87 L10.35,87 L10.35,82 L5.1,82 L5.1,87 Z M3,89 L12.45,89 L12.45,80 L3,80 L3,89 Z"
                    id="grid_system-[#1520]"></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ViewTypeComponent {
  @Output() listToggle = new EventEmitter<boolean>();
  listToggleValue = false;

  emitListToggle() {
    this.listToggleValue = !this.listToggleValue;
    this.listToggle.emit(this.listToggleValue);
  }
}
