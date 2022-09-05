import { Injectable } from '@angular/core';
import { IItem } from '../../interfaces/Item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { from, Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { isPlatform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  headers: HttpHeaders;
  private endpoint = 'https://s3.amazonaws.com/devops-infra/public/';
  private itemParam: IItem | null = null;

  constructor(private httpClient: HttpClient, private http: HTTP) { }

  set(item: IItem): void {
    this.itemParam = item;
  }

  delete(): void {
    this.itemParam = null;
  }

  exists(): boolean {
    return this.itemParam ? true : false;
  }

  getList(): Observable<IItem[]> {
    return this.getRequest('MOCK_DATA.json')
      .pipe(shareReplay())
  }

  get(id: number): Observable<IItem> {
    // checking if data params passed
    if (this.itemParam) {
      return of(this.itemParam);
    } else {
      return this.getRequest('MOCK_DATA.json').pipe(shareReplay())
        .pipe(map((items: any) => items.filter(item => item.id === id)[0]))
    }
  }

  getRequest(route: string): Observable<IItem[]> {
    // using native HTTP to prevent CORS from 3rd party API
    if (isPlatform('capacitor')) {
      return from(this.http.get(`${this.endpoint + route}`, {}, {})).pipe(map((result: any) => JSON.parse(result.data)))
    } else {
      return this.httpClient.get<IItem[]>(`${this.endpoint + route}`)
    }
  }
}
