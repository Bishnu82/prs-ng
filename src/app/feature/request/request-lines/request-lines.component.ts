import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/service/system.service';
import { RequestService } from 'src/app/service/request.service';
import { Request } from 'src/app/model/request.class';
import { BaseComponent } from '../../base/base.component';
import { LineItem } from 'src/app/model/line-item.class';
import { LineItemService } from 'src/app/service/line-item.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent extends BaseComponent implements OnInit {
  title: string = 'Request-Lines';
  title2: string = 'Line-Items';
  request: Request = new Request;
  id: number = 0;
  lineItems: LineItem[] = [];

  constructor(protected sysSvc: SystemService,
              private lineItemSvc: LineItemService,
              private requestSvc: RequestService,
              private router: Router,
              private route: ActivatedRoute) {
                super(sysSvc)
     }

  ngOnInit() {
    super.ngOnInit();
    this.request.user = this.sysSvc.loggedInUser;
      console.log('user logged in', this.loggedInUser)
      // gets request by id
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.getLineItem();
  }
  
  getLineItem() {
    this.requestSvc.get(this.id).subscribe(jr => {
      this.request = jr.data as Request;
    });
    //this.route.params.subscribe(parms => this.id = parms['id']);
    console.log("request lines, getting lines for request...");
    this.lineItemSvc.listLineItemById(this.id).subscribe(jr => {
      console.log("jr: ",jr);
      this.lineItems = jr.data as LineItem[];
      console.log("lines for the request:",this.lineItems);
    });
  }

  delete(id: number) {
    this.lineItemSvc.delete(id).subscribe(jr => {
      this.getLineItem();
      console.log("line item delete jr", jr);
      if (jr.errors != null) {
        console.log("Error deleting line item: " + jr.errors);
      }
      // this.router.navigateByUrl("/requests/lines/"+this.id);
    });
  }

  submitForReview() {
    this.requestSvc.submitForReview(this.request).subscribe(jr => {
      this.router.navigateByUrl("/requests/list")
    });
  }
}