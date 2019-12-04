import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import { User } from 'src/app/model/user.class';
import { Vendor } from 'src/app/model/vendor.class';
import { ProductService } from 'src/app/service/product.service';
import { UserService } from 'src/app/service/user.service';
import { VendorService } from 'src/app/service/vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  title: string = 'Product Create';
  product: Product = new Product();
  users: User[] = [];
  vendors: Vendor[] = [];

  constructor(private productSvc: ProductService,
              private userSvc: UserService,
              private vendorSvc: VendorService,
              private router: Router) { }

  ngOnInit() {
    // populate list of users
    this.userSvc.list().subscribe(jr => {
      this.users = jr.data as User[];
      console.log('users:', this.users);
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

}
