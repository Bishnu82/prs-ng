import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  title: string = 'Request Detail';
  request: Request = new Request();
  id: number = 0;

  constructor(private requestSvc: RequestService,
              private router: Router,
              private route: ActivatedRoute,
              private loc: Location) { }

  ngOnInit() {

    this.route.params.subscribe(parms => this.id = parms['id']);

    this.requestSvc.get(this.id).subscribe(jr =>{
      this.request = jr.data as Request;
    });
  }

  delete(){
    this.requestSvc.delete(this.id).subscribe(jr => {
      console.log('request delete jr:', jr);

      if (jr.errors !=null){
        console.log('Error deleteing request:'+jr.errors);
      }
      this.router.navigateByUrl('requests/list');
    })
  }

}
