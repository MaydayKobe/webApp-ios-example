import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarComponent } from './star.component';
import { BrowserModule } from '@angular/platform-browser';

describe('StarComponent', () => {
  let component: StarComponent;
  let fixture: ComponentFixture<StarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarComponent ],
      imports: [BrowserModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have div with classname of star-rating-top by rating input ', () => {
    const rating = 4;
    component.rating = rating;
    fixture.detectChanges();
    const appElement: HTMLElement = fixture.nativeElement;
    const ratingTopDiv: HTMLElement = appElement.getElementsByTagName('div')[1];
    expect(ratingTopDiv.style.width).toEqual((rating / 5 * 100) + '%');
  });
});
