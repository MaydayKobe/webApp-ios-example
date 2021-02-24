import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HorizontalAppComponent } from './components/horizontal-app/horizontal-app.component';
import { SearchComponent } from './components/search/search.component';
import { StarComponent } from './components/star/star.component';
import { VerticalAppComponent } from './components/vertical-app/vertical-app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HorizontalAppComponent,
        SearchComponent,
        StarComponent,
        VerticalAppComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
      ]
    }).compileComponents();
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AppComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
