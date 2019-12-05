import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/service/system.service';
import { RequestService } from 'src/app/service/request.service';
import { Request } from 'src/app/model/request.class';
import { BaseComponent } from '../../base/base.component';

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

  constructor(protected sysSvc: SystemService,
              private requestSvc: RequestService,
              private route: ActivatedRoute) {
                super(sysSvc)
     }

  ngOnInit() {
    super.ngOnInit();
    this.request.user = this.sysSvc.loggedInUser;
      console.log('user logged in', this.loggedInUser)
    this.route.params.subscribe(parms => this.id = parms['id']);
    
    this.requestSvc.get(this.id).subscribe(jr => {
        this.request = jr.data as Request;
      });
  }

}