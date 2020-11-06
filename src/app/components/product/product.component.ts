import { PHONES } from './ProductList';
import { Phone } from './Phone';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  phoneList: Phone[] = PHONES;
  phone: Phone = {
    brand: '',
    camera: 0,
    memory: 0,
    model: '',
    os: '',
    imageURL: ''
  };

  status = '';

  deletePhone(phone: Phone): void {
    this.phoneList.forEach((item, index) => {
      if (item === phone) {
        this.phoneList.splice(index, 1);
      }
    });
    this.status = `${phone.model} deleted successfully.`;
  }

  orderPhone(): void {
    const tempPhone: Phone = { ...this.phone };
    this.phoneList.unshift(tempPhone);
    this.status = `Added ${tempPhone.model} to your collection`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
