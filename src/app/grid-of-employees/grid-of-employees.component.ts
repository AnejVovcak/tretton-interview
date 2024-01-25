import {Component, Input, OnInit} from '@angular/core';
import {RestService} from "../../services/rest.service";
import {Employee} from "../../interfaces/employee";

@Component({
  selector: 'app-grid-of-employees',
  templateUrl: './grid-of-employees.component.html',
})
export class GridOfEmployeesComponent implements OnInit{

  @Input() employees: Employee[];

  constructor(protected restService: RestService) {
  }

  ngOnInit(): void {
  }
}
