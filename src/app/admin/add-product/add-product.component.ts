import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  isProduct:string ="none"
  ismobile:boolean=false
  islaptop:boolean=false

  constructor() { }

  ngOnInit() {
  }

  addProduct(product_data:any)
  {
        console.log(product_data)
  }
  display(value: any)
  {
    this.isProduct =value.target.value
    this.ismobile=false
    this.islaptop=false   
    if(this.isProduct=="Mobile")
    {
      this.ismobile=true;
    }   
    else if(this.isProduct=="Laptop")
    {
      this.islaptop=true;
    }
  }

}