import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../api/product';

interface list {
  id: string;
  name: string;
  code: string;
  blockType: string;
  articleClassification: string;
  productCategory: string;
  content: string;
  file: file;
  sortOrder: string;
  createdTime: string;
}

interface file {
  size: string;
  name: string;
  image: string;
}

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  getProductsSmall() {
    return this.http
      .get<any>('assets/demo/data/products-small.json')
      .toPromise()
      .then((res) => res.data as Product[])
      .then((data) => data);
  }

  getProducts() {
    return this.http
      .get<any>('assets/demo/data/products.json')
      .toPromise()
      .then((res) => res.data as Product[])
      .then((data) => data);
  }

  getProductsMixed() {
    return this.http
      .get<any>('assets/demo/data/products-mixed.json')
      .toPromise()
      .then((res) => res.data as Product[])
      .then((data) => data);
  }

  getProductsWithOrdersSmall() {
    return this.http
      .get<any>('assets/demo/data/products-orders-small.json')
      .toPromise()
      .then((res) => res.data as Product[])
      .then((data) => data);
  }

  // 測試
  getBlockProducts() {
    return this.http
      .get<any>('assets/demo/data/blockProducts.json')
      .toPromise()
      .then((res) => res.data as list[])
      .then((data) => data);
  }
}
