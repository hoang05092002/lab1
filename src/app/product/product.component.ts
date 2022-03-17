import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  products = [
    {
      id: 1,
      name: 'Iphone 13',
      description: '256gb',
      price: "100000000"
    }
  ];
  newProduct = {
    id: 0,
    name: '',
    description: '',
    price: '',
  };

  isEdit = false;
  onSubmit(data: any) {
    if (this.onValidate(this.newProduct)) {
      return;
    }
    console.log(this.isEdit);
    console.log(this.onValidate(this.newProduct));



    if (this.isEdit) {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === this.newProduct.id) {
          this.products[i] = this.newProduct;
        }
      }
      this.isEdit = false;
    } else {
      // Gán ID bằng độ dài mảng + 1
      this.newProduct.id = this.products.length + 1;
      //Thêm user mới vào bảng products
      this.products.push(this.newProduct);
    }

    //Gán lại giá trị gốc cho newProduct
    this.newProduct = {
      id: 0,
      name: '',
      description: '',
      price: ""
    };
  }
  onValidate(obj: any) {
    if (!obj.name || !obj.description || !obj.price || isNaN(obj.price)) {
      return true;
    }
    return false;
  }

  editPro(pro: any) {
    this.newProduct = pro;
    this.isEdit = true;
  }
}
