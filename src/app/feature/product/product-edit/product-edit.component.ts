import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import { User } from 'src/app/model/user.class';
import { Vendor } from 'src/app/model/vendor.class';
import { ProductService } from 'src/app/service/product.service';
import { UserService } from 'src/app/service/user.service';
import { VendorService } from 'src/app/service/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  title: string = 'Product Edit';
  product: Product = new Product();
  users: User[] = [];
  vendors: Vendor[] = [];
  id: number = 0;

  constructor(private productSvc: ProductService,
              private userSvc: UserService,
              private vendorSvc: VendorService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    // get product for id passed in
    this.productSvc.get(this.id).subscribe(jr =>{
      this.product = jr.data as Product;
    })
    // populate list of users
    this.userSvc.list().subscribe(jr => {
      this.users = jr.data as User[];
      console.log('user:', this.users);
    });
    // populate list of vendors
    this.vendorSvc.list().subscribe(jr => {
      this.vendors = jr.data as Vendor[];
      console.log('vendors:', this.vendors);
    });
  }

  save(): void {
    this.productSvc.save(this.product).subscribe(jr => {
      console.log('saved product...');
      console.log(this.product);
      this.router.navigateByUrl('/products/list')
    });
  }

  compuser(a: User, b: User): boolean{
    return a && b && a.id === b.id;
  }

  compvendor(a: Vendor, b: Vendor): boolean{
    return a && b && a.id === b.id;
  }

}