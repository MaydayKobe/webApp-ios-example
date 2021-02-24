import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalAppComponent } from './vertical-app.component';
import { StarComponent } from '../star/star.component';
import { BrowserModule } from '@angular/platform-browser';

describe('VerticalAppComponent', () => {
  let component: VerticalAppComponent;
  let fixture: ComponentFixture<VerticalAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalAppComponent, StarComponent ],
      imports: [BrowserModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <span> with innerHTML by index input', async () => {
    const index = 1;
    component.index = index;
    fixture.detectChanges();
    const appElement: HTMLElement = fixture.nativeElement;
    const indexSpan: HTMLElement = appElement.getElementsByTagName('span')[0];
    expect(indexSpan.innerHTML).toEqual(index.toString());
  });

  it('should have <img> with classname of img-even by rating input ', () => {
    const index = 2;
    component.index = index;
    fixture.detectChanges();
    const appElement: HTMLElement = fixture.nativeElement;
    const img = appElement.querySelector('img');
    expect(img.getAttribute('class')).toEqual('vertical-app-img img-even');
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
    const nameSpan: HTMLElement = appElement.getElementsByTagName('span')[1];
    expect(nameSpan.innerHTML).toEqual(name);
  });

  it('should have <span> with innerHTML by category input', async () => {
    const category = 'test';
    component.category = category;
    fixture.detectChanges();
    const appElement: HTMLElement = fixture.nativeElement;
    const categorySpan: HTMLElement = appElement.getElementsByTagName('span')[2];
    expect(categorySpan.innerHTML).toEqual(category);
  });

  it('should have <span> with innerHTML by ratingCount input', async () => {
    const ratingCount = 100;
    component.ratingCount = ratingCount;
    fixture.detectChanges();
    const appElement: HTMLElement = fixture.nativeElement;
    const ratingCountSpan: Element = appElement.getElementsByClassName('vertical-app-rating-span')[0];
    expect(ratingCountSpan.innerHTML).toEqual(`(${ratingCount})`);
  });
});
