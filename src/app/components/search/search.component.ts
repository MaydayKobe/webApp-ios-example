import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() newKeywordEvent = new EventEmitter<string>();
  keyword: string;
  updater = new Subject<string>();
  updateSub: Subscription;
  constructor() { }

  ngOnInit(): void {
    this.updateSub = this.updater.pipe(debounceTime(500))
      .subscribe(f => {
        this.newKeywordEvent.emit(f);
      });
  }

  ngOnDestroy(): void {
    if (this.updateSub) {
      this.updateSub.unsubscribe();
    }
  }

  keywordChange(): void {
    this.updater.next(this.keyword);
  }

}
