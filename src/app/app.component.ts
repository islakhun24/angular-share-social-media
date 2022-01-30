import { Component } from '@angular/core';
import { faFacebookSquare, faWhatsappSquare , faInstagramSquare } from '@fortawesome/free-brands-svg-icons';


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
  onClickFacebook(){
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('https://spacenews.com/caci-ramping-up-production-of-optical-terminals-for-low-earth-orbit-satellites/'));
    return false
  };

  onClickInstagram(){
    window.open('http://instagram.com/sharer.php?u=' +'add custom text here');
    return false;
  };

  onClickWhatsapp(){
    window.open('whatsapp://send?text= https://www.youtube.com/watch?v=ohpCMpderow');
  };

}
