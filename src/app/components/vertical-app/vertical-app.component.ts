import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-app',
  templateUrl: './vertical-app.component.html',
  styleUrls: ['./vertical-app.component.scss']
})
export class VerticalAppComponent implements OnInit {
  @Input() index: number;
  @Input() imgUrl: string;
  @Input() name: string;
  @Input() category: string;
  @Input() rating: number;
  @Input() ratingCount: number;
  constructor() { }

  ngOnInit(): void {
  }

}
