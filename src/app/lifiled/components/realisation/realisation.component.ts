import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-realisation',
  templateUrl: './realisation.component.html',
  styleUrls: ['./realisation.component.scss']
})
export class RealisationComponent implements OnInit {
  url ="https://www.youtube.com/embed/3K5ayAx_mVs"
  url1 ="https://www.youtube.com/embed/WcRWdMS48a4"

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

     
  imgCollection: Array<object> = [
    {
      image: 'https://i.postimg.cc/0jKfBpyj/Whats-App-Image-2022-05-04-at-08-06-37.jpg',
      thumbImage: 'https://i.postimg.cc/0jKfBpyj/Whats-App-Image-2022-05-04-at-08-06-37.jpg',
      alt: 'Image 1',
      title: ''
    }, {
      image: 'https://i.postimg.cc/52BPJqqF/Whats-App-Image-2022-05-04-at-08-06-35.jpg',
      thumbImage: 'https://i.postimg.cc/52BPJqqF/Whats-App-Image-2022-05-04-at-08-06-35.jpg',
      title: '',
      alt: 'Image 2'
    }, {
      image: 'https://i.postimg.cc/mD2p8z91/Whats-App-Image-2022-05-04-at-08-05-58.jpg',
      thumbImage: 'https://i.postimg.cc/mD2p8z91/Whats-App-Image-2022-05-04-at-08-05-58.jpg',
      title: '',
      alt: 'Image 3'
    }, {
      image: 'https://i.postimg.cc/Zqz1F5j6/VILLAGE-2.jpg',
      thumbImage: 'https://i.postimg.cc/Zqz1F5j6/VILLAGE-2.jpg',
      title: '',
      alt: 'Image 4'
    }, {
      image: 'https://i.postimg.cc/pLFwFFQ2/VILLAGE-ENFANT.jpg',
      thumbImage: 'https://i.postimg.cc/pLFwFFQ2/VILLAGE-ENFANT.jpg',
      title: '',
      alt: 'Image 5'
    }, {
      image: 'https://i.postimg.cc/2jXcz5pr/visuel-LIFILED.png',
      thumbImage: 'https://i.postimg.cc/2jXcz5pr/visuel-LIFILED.png',
      title: '',
      alt: 'Image 3'
    }, {
      image: 'https://i.postimg.cc/FRVmJL4f/BRAHIMAKRO.jpg',
      thumbImage: 'https://i.postimg.cc/FRVmJL4f/BRAHIMAKRO.jpg',
      title: '',
      alt: 'Image 4'
    }, {
      image: 'https://i.postimg.cc/Z54QCMqL/Whats-App-Image-2022-09-27-at-14-37-59.jpg',
      thumbImage: 'https://i.postimg.cc/Z54QCMqL/Whats-App-Image-2022-09-27-at-14-37-59.jpg',
      title: '',
      alt: 'Image 5'
    }
];

  getSafeurl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  getSafeurl1(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url1);
  }
}
