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
  onClickFacebook(){
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('https://spacenews.com/caci-ramping-up-production-of-optical-terminals-for-low-earth-orbit-satellites/'));
    return false
  };

  onClickInstagram(){
    window.open('http://instagram.com/sharer.php?u=' +'add custom text here');
    return false;
  };

  onClickWhatsapp(){
    window.open('whatsapp://send?text='+  encodeURIComponent('https://spacenews.com/caci-ramping-up-production-of-optical-terminals-for-low-earth-orbit-satellites/'));
    return false;
  };

  onClickTwitter(){
    window.open('http://twitter.com/share?text='+ encodeURIComponent('https://spacenews.com/caci-ramping-up-production-of-optical-terminals-for-low-earth-orbit-satellites/'));
    return false
  }

  onClickTiktok(){
    window.open('http://twitter.com/share?text='+ encodeURIComponent('https://spacenews.com/caci-ramping-up-production-of-optical-terminals-for-low-earth-orbit-satellites/'));
    return false
  }

  onClickLine(){
    window.open('https://social-plugins.line.me/lineit/share?url='+encodeURIComponent('https://spacenews.com/caci-ramping-up-production-of-optical-terminals-for-low-earth-orbit-satellites/'));
    return false;
  }

}
