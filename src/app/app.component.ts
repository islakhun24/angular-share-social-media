import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
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
  url = 'https://angular-share-social-media.vercel.app';


  constructor(
    private metaTagService: Meta
  ){

  }
  ngOnInit(){
    this.metaTagService.addTags([
  //     <meta property="og:url"                content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
  // <meta property="og:type"               content="article" />
  // <meta property="og:title"              content="When Great Minds Don’t Think Alike" />
  // <meta property="og:description"        content="How much does culture influence creative thinking?" />
  // <meta property="og:image"              content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />
      {
        property: 'og:url',
        content: 'http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html'
      },
      {
        property: 'og:type',
        content: 'article'
      },
      {
        property: 'og:title',
        content: 'PJCSI (Persatuan Jasmine Cantik Seluruh Indonesia) testing'
      },
      {
        property: 'og:description',
        content: 'Snack Catering berisi lontong, kue pie, kue pisang, kue soes, pie susu, risoles, panada. Request dijual terpisah ya. bisa beli satuan'
      },
      {
        property: 'og:image',
        content: 'http://cdn-dev.oss-ap-southeast-5.aliyuncs.com/rvn-retail-api/MCH-0682-1634101387360/2022/01/26/7b15706a-6e50-41a2-8d0b-d38cffb9400d.png?Expires=1643563725&OSSAccessKeyId=LTAI5tEQGPKPFCTSeiM2NoXf&Signature=%2BbvOA0PDAjoObzPcvqaoTWohcz4%3D'
      },
      {
        name: 'twitter:image',
        content: 'http://cdn-dev.oss-ap-southeast-5.aliyuncs.com/rvn-retail-api/MCH-0682-1634101387360/2022/01/26/7b15706a-6e50-41a2-8d0b-d38cffb9400d.png?Expires=1643563725&OSSAccessKeyId=LTAI5tEQGPKPFCTSeiM2NoXf&Signature=%2BbvOA0PDAjoObzPcvqaoTWohcz4%3D'
      }
    ]);
  }
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
