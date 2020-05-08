import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddproductService {
  static addProduct(finalProductData: { [k: string]: any; }) {
    throw new Error("Method not implemented.");
  }
  

  url='/admin/addProduct';
  constructor(private hc:HttpClient) { }

  addProduct(productData):Observable<any>
  {
      return this.hc.post(this.url,productData);
  }

}
