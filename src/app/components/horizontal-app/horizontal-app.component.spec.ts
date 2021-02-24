import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalAppComponent } from './horizontal-app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

describe('HorizontalAppComponent', () => {
  let component: HorizontalAppComponent;
  let fixture: ComponentFixture<HorizontalAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalAppComponent ],
      imports: [BrowserModule, FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <img> with src by imgUrl input', async () => {
    const imgUrl = '../../../assets/icons/icon-128x128.png';
    component.imgUrl = imgUrl;
    fixture.detectChanges();
    const appElement: HTMLElement = fixture.nativeElement;
    const img = appElement.querySelector('img');
    expect(img.getAttribute('src')).toEqual(imgUrl);
  });

  it('should have <span> with innerHTML by name input', async () => {
    const name = 'angular test';
    component.name = name;
    fixture.detectChanges();
    const appElement: HTMLElement = fixture.nativeElement;
    const nameSpan: HTMLElement = appElement.getElementsByTagName('span')[0];
    expect(nameSpan.innerHTML).toEqual(name);
  });

  it('should have <span> with innerHTML by category input ', async () => {
    const category = 'test';
    component.category = category;
    fixture.detectChanges();
    const appElement: HTMLElement = fixture.nativeElement;
    const categorySpan: HTMLElement = appElement.getElementsByTagName('span')[1];
    expect(categorySpan.innerHTML).toEqual(category);
  });
});
