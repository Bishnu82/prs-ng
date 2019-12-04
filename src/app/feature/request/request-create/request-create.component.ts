import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/service/system.service';
import { RequestService } from 'src/app/service/request.service';
import { Request } from 'src/app/model/request.class';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user.class';
import { BaseComponent } from '../../base/base.component';


@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent extends BaseComponent implements OnInit {
  title: string = 'Request Create';
  user: User = null;
  request: Request = new Request();
  users: User[];

  constructor(private requestSvc: RequestService,
              private userSvc: UserService,
              private router: Router,
              protected sysSvc: SystemService) {
                super(sysSvc)
               }

  ngOnInit() {
    // populate list of users
    this.request.user = this.sysSvc.loggedInUser;
  }

  save(): void {
    this.requestSvc.save(this.request).subscribe(jr => {
      console.log('saved request...');
      console.log(this.request);
      this.router.navigateByUrl('/requests/list')
    });
  }

}
