import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { faFacebookSquare, faTwitterSquare, faLine, faTiktok , faWhatsappSquare , faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { MetadataService } from './metadata.service';


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
    private metadataService: MetadataService
  ){

  }
  ngOnInit(){
    // this.metaTagService.addTags([
    //   {
    //     property: 'og:url',
    //     content: 'https://angular-share-social-media.vercel.app'
    //   },
    //   {
    //     property: 'og:type',
    //     content: 'article'
    //   },
    //   {
    //     property: 'og:title',
    //     content: 'PJCSI (Persatuan Jasmine Cantik Seluruh Indonesia) testing'
    //   },
    //   {
    //     property: 'og:description',
    //     content: 'Snack Catering berisi lontong, kue pie, kue pisang, kue soes, pie susu, risoles, panada. Request dijual terpisah ya. bisa beli satuan'
    //   },
    //   {
    //     property: 'og:image',
    //     content: 'http://cdn-dev.oss-ap-southeast-5.aliyuncs.com/rvn-retail-api/MCH-0682-1634101387360/2022/01/26/7b15706a-6e50-41a2-8d0b-d38cffb9400d.png?Expires=1643563725&OSSAccessKeyId=LTAI5tEQGPKPFCTSeiM2NoXf&Signature=%2BbvOA0PDAjoObzPcvqaoTWohcz4%3D'
    //   },
    //   {
    //     property: 'twitter:image',
    //     content: 'http://cdn-dev.oss-ap-southeast-5.aliyuncs.com/rvn-retail-api/MCH-0682-1634101387360/2022/01/26/7b15706a-6e50-41a2-8d0b-d38cffb9400d.png?Expires=1643563725&OSSAccessKeyId=LTAI5tEQGPKPFCTSeiM2NoXf&Signature=%2BbvOA0PDAjoObzPcvqaoTWohcz4%3D'
    //   },
    //   {
    //     property: 'twitter:card',
    //     content: 'summary_large_image'
    //   },
    //   {
    //     property: 'twitter:image:alt',
    //     content: ''
    //   },
    //   {
    //     property: 'twitter:title',
    //     content: 'PJCSI (Persatuan Jasmine Cantik Seluruh Indonesia) testing'
    //   },
    //   {
    //     property: 'twitter:description',
    //     content: 'Snack Catering berisi lontong, kue pie, kue pisang, kue soes, pie susu, risoles, panada. Request dijual terpisah ya. bisa beli satuan'
    //   },
    //   {
    //     property: 'twitter:url',
    //     content:'https://angular-share-social-media.vercel.app/'
    //   }
    // ]);
    if (this.metadataService) {
      this.metadataService.updateMetadata({
          title: 'PJCSI (Persatuan Jasmine Cantik Seluruh Indonesia) testing',
          imageRelativeUrl: 'http://cdn-dev.oss-ap-southeast-5.aliyuncs.com/rvn-retail-api/MCH-0003-1099057059398/2022/01/24/2d8b2c7d-a7f8-43c1-8ba3-c1539c9c71a2.png?Expires=1644947512&OSSAccessKeyId=LTAI5tEQGPKPFCTSeiM2NoXf&Signature=KAjWst3mLIUdarjn35hC89H6UYo%3D',
          description: 'Snackssss Catering berisi lontong, kue pie, kue pisang, kue soes, pie susu, risoles, panada. Request dijual terpisah ya. bisa beli satuan',
          keywords: ['Snack Catering berisi lontong, kue pie, kue pisang, kue soes, pie susu, risoles, panada. Request dijual terpisah ya. bisa beli satuan'],
          type: 'PJCSI',
          url: 'https://angular-share-social-media.vercel.app'
      });
    }
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
