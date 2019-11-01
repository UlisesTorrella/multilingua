import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }

  getNews(parametros:{q:string,r:string}) {
      var url = 'https://newsapi.org/v2/top-headlines?' +
        'language=' + parametros.r + '&' +
        'sortBy=popularity&' +
        'apiKey=***';
      return this.http.get(url);
  }
}
