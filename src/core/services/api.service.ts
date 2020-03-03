import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../models/api.model'
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {}

  configUrl = 'https://api.publicapis.org/entries';

  getApiResponse(): Observable<ApiResponse[]> {
    return this.http.get<ApiResponse[]>(
      this.configUrl);
  }
}