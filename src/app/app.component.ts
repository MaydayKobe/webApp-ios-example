import { Component, OnInit } from '@angular/core';
import { IFreeAppsResult, ITopAppsResult } from './interfaces';
import { ItunesService } from './services/itunes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  grossingApps: ITopAppsResult[] = [];
  freeApps: IFreeAppsResult[] = [];
  freeAppsIds: string[] = [];
  searchApps: IFreeAppsResult[] = [];
  constructor(
    private itunesService: ItunesService,
  ){}

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    this.getTopGrossingApps();
    this.getTopFreeApps();
  }

  async getTopGrossingApps(): Promise<void> {
    try {
      const data = await this.itunesService.getTopGrossingApps(10);
      if (data && data.feed && data.feed.entry) {
        for (const item of data.feed.entry) {
          this.grossingApps.push({
            id: item.id.attributes['im:id'],
            name: item['im:name'].label,
            image: item['im:image'][2].label,
            category: item.category.attributes.label,
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  async getTopFreeApps(): Promise<void> {
    try {
      const data = await this.itunesService.getTopFreeApps(100);
      if (data && data.feed && data.feed.entry) {
        for (const item of data.feed.entry) {
          this.freeAppsIds.push(item.id.attributes['im:id']);
          this.freeApps.push({
            id: item.id.attributes['im:id'],
            name: item['im:name'].label,
            image: item['im:image'][2].label,
            category: item.category.attributes.label,
            author: item['im:artist'].label,
            summary: item.summary.label,
            rating: 0,
            ratingCount: 0,
          });
        }
        this.searchApps = this.freeApps;
        this.lookupApp(this.freeAppsIds);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async lookupApp(ids: string[]): Promise<void> {
    try {
      const data = await this.itunesService.lookupApp(ids);
      if (data && data.results) {
        for (const item of data.results) {
          this.freeApps.map(x => {
            if (x.id === item.trackId.toString()) {
              x.rating = item.averageUserRating;
              x.ratingCount = item.userRatingCount;
            }
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  search(word: string): void {
    this.searchApps = this.freeApps.filter(x => x.name.includes(word) || x.author.includes(word) || x.summary.includes(word));
  }
}
