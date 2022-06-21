import { Component, Input, OnInit } from '@angular/core';
import { IData } from '../service.service';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.scss'],
})
export class FigureComponent {
  @Input() figure: IData = {
    albumId: 0,
    id: 0,
    title: '',
    url: '',
    thumbnailUrl: '',
  };
}
