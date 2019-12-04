import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/model/request.class';
import { SystemService } from 'src/app/service/system.service';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {
  request: Request;
  id: number = 0;

  constructor(
    private sysSvc: SystemService,
    private requestSvc: RequestService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.request.user = this.sysSvc.loggedInUser;
    this.route.params.subscribe(parms => this.id = parms['id']);
    console.log("Request:", this.id);
    this.requestSvc.get(this.id)
      .subscribe(jr => {
        console.log("Request:", jr);
        this.request = jr.data;
      });
  }

}