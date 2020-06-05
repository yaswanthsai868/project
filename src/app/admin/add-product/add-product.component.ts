import { Component, OnInit } from '@angular/core';
import { AddproductService } from '../addproduct.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  isProduct:string ="none"
  features:any
  photofile:Blob
  photo :string | ArrayBuffer ='';
  ismobile:boolean=false
  islaptop:boolean=false
  constructor(private hc:HttpClient,private router:Router) { }

  ngOnInit() {
  }
  onSelectPhoto(event) {
    let file=new FileReader();
    this.photofile=event.target.files[0]
    file.readAsDataURL(event.target.files[0])
    file.onload=()=>{
      this.photo=file.result;
    }
  }

  addProduct(productFormRef)
  {
      let fd=new FormData()
      let product=productFormRef.value
      product['type']=this.isProduct
      fd.append('productdata',JSON.stringify(productFormRef.value))
      fd.append('images',this.photofile)
        this.hc.post('/admin/addproduct',fd).subscribe((result)=>{
                
            if(result['message']== 'success')
            {
              alert("Product added successfully");
              productFormRef.reset();
              this.router.navigateByUrl('/admin/dashboard')
            }
            else
            {
              alert(`unable to add a product, please try after some time ${result['message']}`);
            } 
        })
      

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

