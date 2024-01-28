import { Component } from '@angular/core';
import {RestService} from "../services/rest.service";
import {Employee} from "../interfaces/employee";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tretton';

  employees: Employee[];

  listToggleValue = false;

  constructor(protected restService: RestService) {
  }

  ngOnInit(): void {
    this.restService.getEmployees().subscribe((employees) => {
      console.log(employees);
      this.employees = employees.sort(() => Math.random() - 0.5);
    });
  }
}
