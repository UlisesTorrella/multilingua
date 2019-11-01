import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VideoServiceProvider } from '../../providers/video-service/video-service';
import { NewsProvider } from '../../providers/news/news';


import { DomSanitizer} from '@angular/platform-browser';

declare let cordova: any;

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {
  public videos:{};
  public noticias:{};
  public language:string;

  swipeEvent(e) {
  if(e.direction == '2'){
      console.log(parseInt(this.navCtrl.id.split("-")[1])+1);
     this.navCtrl.parent.select(parseInt(this.navCtrl.id.split("-")[1])+1);
  }
  else if(e.direction == '4'){
     this.navCtrl.parent.select(parseInt(this.navCtrl.id.split("-")[1])-1);
  }
}
  constructor(public navCtrl: NavController, public youtube: VideoServiceProvider, private sanitizer: DomSanitizer, public news: NewsProvider, navParams: NavParams) {
      this.language = navParams.data.name;
      let words = navParams.data.words;
      let randomWord =words[this.randomInt(0,words.length-1)] + " " + words[this.randomInt(0,words.length-1)];
      console.log(randomWord);
      let region = navParams.data.region;
      this.youtube.getVideos({
          q: randomWord,
          r: region
      })
      .subscribe(
          (data) => { // Success
            this.videos = data['items'];
          },
          (error) =>{
            console.error(error);
          }
        );
      this.news.getNews({
            q: words[this.randomInt(0,words.length-1)],
            r: region,
        })
        .subscribe(
            (data) => { // Success
              this.noticias = data['articles'];
              console.log(data)
            },
            (error) =>{
              console.error(error);
            }
          );


  }

  public openURL(url:string){
      cordova.InAppBrowser.open(url, "_system", "location=true");
  }
  randomInt(min, max){
       return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
