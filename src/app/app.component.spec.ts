import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HorizontalAppComponent } from './components/horizontal-app/horizontal-app.component';
import { SearchComponent } from './components/search/search.component';
import { StarComponent } from './components/star/star.component';
import { VerticalAppComponent } from './components/vertical-app/vertical-app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ItunesService } from './services/itunes.service';

const apps = {
  feed: {
    entry: [
      {
        id: {
          attributes: {
            'im:id': '123456'
          }
        },
        'im:name': {
          label: 'testApp'
        },
        'im:image': [
          {label: '../assets/icons/icon-96x96.png'},
          {label: '../assets/icons/icon-128x128.png'},
          {label: '../assets/icons/icon-144x144.png'}
        ],
        category: {
          attributes: {
            label: 'testCategory'
          }
        },
        'im:artist': {
          label: 'MaydayKobe'
        },
        summary: {
          label: 'test for app'
        }
      },
    ]
  }
};
const appResults = {
  results: [
    {
      trackId: 123456,
      averageUserRating: 4.8,
      userRatingCount: 100
    }
  ]
};
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let ituensServiceStub: Partial<ItunesService>;
  ituensServiceStub = {
    getTopGrossingApps: (limit: number) => new Promise((r) => r(apps)),
    getTopFreeApps: (limit: number) => new Promise((r) => r(apps)),
    lookupApp: (ids: string[]) => new Promise((r) => r(appResults))
  };
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
      ],
      providers: [{provide: ItunesService, useValue: ituensServiceStub}]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('grossingApps is not empty', async () => {
    await fixture.detectChanges();
    expect(component.grossingApps.length === 0).toBeFalse();
  });

  it('freeApps is not empty', async () => {
    await fixture.detectChanges();
    expect(component.freeApps.length === 0).toBeFalse();
  });

  it('freeAppsIds is not empty', async () => {
    await fixture.detectChanges();
    expect(component.freeAppsIds.length === 0).toBeFalse();
  });

  it('searchApps is not empty', async () => {
    await fixture.detectChanges();
    expect(component.searchApps.length === 0).toBeFalse();
  });
});
