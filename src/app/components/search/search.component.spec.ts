import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises the newkeywordevent event when the input changes', async () => {
    const keyword = 'test';
    component.newKeywordEvent.subscribe((value) => expect(value).toEqual(keyword));
    const hostElement = fixture.nativeElement;
    const searchInput: HTMLInputElement = hostElement.querySelector('input');
    searchInput.value = keyword;
    searchInput.dispatchEvent(new Event('input'));
    await new Promise(r => setTimeout(r, 1000));
    fixture.detectChanges();
  });
});
