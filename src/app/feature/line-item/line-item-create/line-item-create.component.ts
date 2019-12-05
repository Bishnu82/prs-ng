import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item.class';
import { Product } from 'src/app/model/product.class';
import { SystemService } from 'src/app/service/system.service';
import { LineItemService } from 'src/app/service/line-item.service';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../../base/base.component';
import { Request } from 'src/app/model/request.class';

@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css']
})
export class LineItemCreateComponent extends BaseComponent implements OnInit {
  title: 'Line-Item Create'
  lineitem: LineItem = new LineItem();
  lineitems: LineItem[] = [];
  products: Product[] = [];
  request: Request = new Request;
  product: Product = new Product;
  id: number = 0;
  
  
  constructor(protected sysSvc: SystemService,
              private lineItemSvc: LineItemService,
              private productSvc: ProductService,
              private requestSvc: ProductService,

              private route: ActivatedRoute,
              private router: Router) {
                super(sysSvc)
               }

  
  
  ngOnInit() {
    this.loggedInUser = this.sysSvc.loggedInUser;
    this.route.params.subscribe(parms => this.id = parms['id']);
    // this.requestSvc.get(this.id).subscribe(jr => {
    //   this.request = jr.data as Request;
    //   this.lineitem.request = this.request;
    // });
    this.productSvc.list().subscribe(jr => {
      console.log("jr:", jr);
      this.products = jr.data as Product[];
      });
    }

    save(): void {
      this.productSvc.save(this.product).subscribe(jr => {
        console.log('saved product...');
        console.log(this.product);
        this.router.navigateByUrl('/requests/lines')
      });
    }
    // this.lineItemSvc.linesForRequest(this.id).subscribe(jr => {
    //   this.lineitems = jr.data as LineItem[];
    // });
  }
