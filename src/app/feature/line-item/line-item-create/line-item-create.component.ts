import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item.class';
import { Product } from 'src/app/model/product.class';
import { SystemService } from 'src/app/service/system.service';
import { LineItemService } from 'src/app/service/line-item.service';
import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../../base/base.component';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css']
})
export class LineItemCreateComponent extends BaseComponent implements OnInit {
  title: 'Line-Item Create'
  lineItem: LineItem = new LineItem();
  products: Product[] = [];
  request: Request = new Request();
  id: number = 0;
  
  
  constructor(protected sysSvc: SystemService,
              private lineItemSvc: LineItemService,
              private productSvc: ProductService,
              private requestSvc: RequestService,
              private route: ActivatedRoute,
              private router: Router) {
                super(sysSvc)
               }

  ngOnInit() {
    this.loggedInUser = this.sysSvc.loggedInUser;
    console.log(this.lineItem)
    //populate list of products
    this.productSvc.list().subscribe(jr => {
      this.products = jr.data as Product[];
      console.log("products: ", this.products);
    });
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.requestSvc.get(this.id).subscribe(jr => {
      this.request = jr.data as Request;
    });
  }

    save(): void {
      console.log("attempting to save line item:", this.lineItem);
      this.lineItem.request = this.request;

      this.lineItemSvc.save(this.lineItem).subscribe(jr => {
        console.log('saved lineItem...');
        console.log(this.lineItem);
        // this.lineitems = jr.data as LineItem[];
        this.router.navigateByUrl('/requests/lines/'+this.id);
      });
    }
  }
