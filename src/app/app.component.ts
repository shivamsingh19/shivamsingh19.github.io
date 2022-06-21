import { Component, OnInit } from '@angular/core';
import { IData, ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data: IData[] = [];
  p: number = 1;
  searchTerm = '';

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((data: IData[]) => {
      this.data = data;
    });
  }

  search() {
    this.p = 1;
  }
}
