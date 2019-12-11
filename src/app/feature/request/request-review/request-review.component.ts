 import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/model/request.class';
import { SystemService } from 'src/app/service/system.service';
import { RequestService } from 'src/app/service/request.service';
import { BaseComponent } from '../../base/base.component';
import { LineItem } from 'src/app/model/line-item.class';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})

export class RequestReviewComponent extends BaseComponent implements OnInit {
  title: string = 'Request-Review';
  request: Request = new Request;
  status: string = 'review';
  lineItems: LineItem[] = [];
  requests: Request[] = [];

  constructor(protected sysSvc: SystemService,
              private requestSvc: RequestService) {
                super(sysSvc)
     }

  ngOnInit() {
    super.ngOnInit();
    this.request.user = this.sysSvc.loggedInUser;
      console.log('user logged in', this.loggedInUser)
      // gets request by review status
    console.log("Calling request review service list...");
    this.requestSvc.listForReview(this.loggedInUser.id).subscribe(jr => {this.requests = jr.data as Request[];
    console.log(this.requests)
  });
}
}
  
  // getRequestReview() {
  //   this.requestSvc.list(status).subscribe(jr => {
  //     this.request = jr.data as Request;
  //   });
  //   //this.route.params.subscribe(parms => this.id = parms['id']);
  //   console.log("request lines, getting lines for request...");
  //   this.lineItemSvc.listLineItemById(this.id).subscribe(jr => {
  //     console.log("jr: ",jr);
  //     this.lineItems = jr.data as LineItem[];
  //     console.log("lines for the request:",this.lineItems);
  //   });
  // }

//   approve(request: Request) {
//     this.lineItemSvc.delete(id).subscribe(jr => {
//       this.getLineItem();
//       console.log("line item delete jr", jr);
//       if (jr.errors != null) {
//         console.log("Error deleting line item: " + jr.errors);
//       }
//       // this.router.navigateByUrl("/requests/lines/"+this.id);
//     });
//   }

//   submitForReview() {
//     this.requestSvc.submitForReview(this.request).subscribe(jr => {
//       this.router.navigateByUrl("/requests/list")
//     });
//   }
// }
