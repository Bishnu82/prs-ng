// import { Component, OnInit } from '@angular/core';
// import { LineItem } from 'src/app/model/line-item.class';
// import { Product } from 'src/app/model/product.class';
// import { SystemService } from 'src/app/service/system.service';
// import { LineItemService } from 'src/app/service/line-item.service';
// import { ProductService } from 'src/app/service/product.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { BaseComponent } from '../../base/base.component';
// import { User } from 'src/app/model/user.class';

// @Component({
//   selector: 'app-line-item-create',
//   templateUrl: './line-item-create.component.html',
//   styleUrls: ['./line-item-create.component.css']
// })
// export class LineItemCreateComponent extends BaseComponent implements OnInit {
//   title: 'Line-Item Create'
//   lineitem: LineItem = new LineItem();
//   products: Product[];
//   user: User[];
//   id: number;
  
//   constructor(protected sysSvc: SystemService,
//               private lineitemsvc: LineItemService,
//               private productsvc: ProductService,
//               private route: ActivatedRoute,
//               private router: Router) {
//                 super(sysSvc)
//                }

  
  
//   ngOnInit() {
//     this.lineitem.user = this.sysSvc.loggedInUser;
//     this.route.params.subscribe(parms => this.id = parms['id']);
    
//     this.productsvc.list()
//     .subscribe(resp => {
//       console.log("Resp:", resp);
//       this.products = resp.Data;
//     });
//   }
//   save(): void {
//   this.lineitem. = Number(this.prid);
//   console.log("reqline:", this.reqline, ", route:", this.reqline.RequestId);
//   this.reqlinesvc.create(this.reqline)
//   .subscribe(resp => {
//   console.log("resp:", resp);
//   this.router.navigateByUrl('/requests/lines/'+this.prid);
//   });
//   }

// }