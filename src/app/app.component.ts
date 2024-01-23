import { Component } from '@angular/core';
import {RestService} from "../services/rest.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tretton';

  constructor(protected restService: RestService) {
  }

  ngOnInit(): void {
    this.restService.getEmployees().subscribe((employees) => {
      console.log(employees);
    });
  }
}
