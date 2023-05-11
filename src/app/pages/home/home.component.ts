import { Component } from '@angular/core';
import { User } from 'src/app/common/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  myInfor: User = {
    name: 'Tèo',
    age: 33,
    address: 'HN, VN',
    intro:
      'Tôi là một lập trình viên ham hố tìm hiểu những công nghệ mới trong lập trình web...',
  };
}
