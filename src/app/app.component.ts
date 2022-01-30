import { Component } from '@angular/core';
import { faFacebookSquare, faTwitterSquare, faLine, faTiktok , faWhatsappSquare , faInstagramSquare } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'share';
  faFacebookSquare = faFacebookSquare;
  faWhatsappSquare = faWhatsappSquare;
  faInstagramSquare = faInstagramSquare;
  faTwitterSquare = faTwitterSquare;
  faTiktok = faTiktok;
  faLine = faLine;
  url = 'https://app-uat.doku.com/retail/merchant/jasmine-catering-gen1/Baju-bayi-10a51e523bf14655';
  onClickFacebook(){
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + this.url);
    return false
  };

  onClickInstagram(){
    window.open('http://instagram.com/p/');
    return false;
  };

  onClickWhatsapp(){
    window.open('whatsapp://send?text='+  this.url);
    return false;
  };

  onClickTwitter(){
    window.open('http://twitter.com/share?text='+ this.url);
    return false
  }

  onClickTiktok(){
    window.open('http://twitter.com/share?text='+ this.url);
    return false
  }

  onClickLine(){
    window.open('https://social-plugins.line.me/lineit/share?url='+ this.url);
    return false;
  }

}
