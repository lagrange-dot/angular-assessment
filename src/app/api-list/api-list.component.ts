import { Component } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'api-list',
  templateUrl: './api-list.component.html',
  styleUrls: [ './api-list.component.css' ]
})
export class ApiListComponent  {

  constructor(apiService: ApiService){

  }

  

}
