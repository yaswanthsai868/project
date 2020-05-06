import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  isProduct:string ="none"
  features:any
  photo :string | ArrayBuffer ='';
  ismobile:boolean=false
  islaptop:boolean=false
  finalProductData: {[k: string]: any} = {};
  constructor() { }

  ngOnInit() {
  }
  onSelectPhoto(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        
       this.photo = event.target.result ;
      }
    }
  }

  addProduct(product_data:any)
  {
        var tempobj: {[k: string]: any} = {};
        tempobj.Brand = product_data.Brand;
        tempobj.Model_Name  =product_data.Model;
        tempobj.Price= product_data.Price;
        tempobj.Description=product_data.Description;
        tempobj.Sold_by =  product_data.Sold_By;
        tempobj.Photo = this.photo;
         delete product_data.Brand;
         delete product_data.Model;
         delete product_data.Price;
         delete product_data.Description;
         delete product_data.Sold_By;
        tempobj.features=product_data;
        if(this.ismobile)
        {
          
          tempobj.type="Mobile";
        }
        else if(this.islaptop)
        {
            tempobj.type="Laptop";
        }
        this.finalProductData=tempobj;
        console.log(this.finalProductData);
  }


  display(value: any)
  {
    this.isProduct =value.target.value
    this.ismobile=false
    this.islaptop=false 
    this.photo='' 
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

