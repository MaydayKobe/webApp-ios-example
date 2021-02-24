import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-app',
  templateUrl: './horizontal-app.component.html',
  styleUrls: ['./horizontal-app.component.scss']
})
export class HorizontalAppComponent implements OnInit {
  @Input() imgUrl: string;
  @Input() name: string;
  @Input() category: string;
  constructor() { }

  ngOnInit(): void {
  }

}
