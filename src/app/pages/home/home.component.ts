import { Component } from '@angular/core';
import { Product } from 'src/app/common/product';
import { User } from 'src/app/common/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // myInfor: User = {
  //   name: 'Tèo',
  //   age: 33,
  //   address: 'HN, VN',
  //   intro:
  //     'Tôi là một lập trình viên ham hố tìm hiểu những công nghệ mới trong lập trình web...',
  // };

  products: Product[] = [
    {
      id: '1',
      name: 'Product A',
      desc: 'Mo ta cho san pham A',
      price: 200,
      imgUrl:
        'https://file.hstatic.net/200000053174/file/cac-loai-ao-vest-nam_07a5c0b0bfee420b8edc3225a9529187.jpg',
    },
    {
      id: '2',
      name: 'Product B',
      desc: 'Mo ta cho san pham B',
      price: 400,
      imgUrl:
        'https://file.hstatic.net/200000053174/file/cac-loai-ao-vest-nam_07a5c0b0bfee420b8edc3225a9529187.jpg',
    },
    {
      id: '3',
      name: 'Product C',
      desc: 'Mo ta cho san pham C',
      price: 300,
      imgUrl:
        'https://file.hstatic.net/200000053174/file/cac-loai-ao-vest-nam_07a5c0b0bfee420b8edc3225a9529187.jpg',
    },
  ];
}
