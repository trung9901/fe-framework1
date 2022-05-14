import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  name = 'trungnhph13487';
  class = 'we16301';
  students = [
    {
      name: 'trung',
      id: 'PH1',
      status: 0
    },
    {
      name: 'trung',
      id: 'PH2',
      status: 0
    },
    {
      name: 'trung',
      id: 'PH3',
      status: 1
    }
  ];
  champs = [
    {
      name: 'Lucian',
      dame: 400,
      defend: 200,
      speed: 100,
      price: 6300,
      avatar: 'https://demoda.vn/wp-content/uploads/2022/02/anh-lol-dep-lmht-hinh-nen-lol-cuc-ngau.jpg'
    },
    {
      name: 'Mobeie',
      dame: 10000,
      defend: 200,
      speed: 100,
      price: 500,
      avatar: 'https://demoda.vn/wp-content/uploads/2022/02/anh-lol-dep-lmht-hinh-nen-lol-cuc-ngau.jpg'
    }
  ]
  studentName = 'Nguyen Huy Trung'
  studentMSV = 'PH13487'
}


