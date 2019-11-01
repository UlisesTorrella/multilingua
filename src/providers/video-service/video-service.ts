import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

/*
  Generated class for the VideoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VideoServiceProvider {

  constructor(public http: HttpClient) {}
  apiKey = "****";
  getVideos(parametros:{q:string,r:string}) {
      return this.http.get('https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&q=' + parametros.q + '&regionCode' + parametros.r +'&part=snippet,id&maxResults=5');
  }
}
