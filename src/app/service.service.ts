import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IData {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<IData[]> {
    let apiUrl = 'https://jsonplaceholder.typicode.com/albums/1/photos';
    return this.httpClient.get<IData[]>(apiUrl);
  }
}
