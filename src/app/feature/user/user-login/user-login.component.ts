import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/service/user.service";
import { SystemService } from "src/app/service/system.service";
import { Router } from "@angular/router";
import { User } from "src/app/model/user.class";
import { BaseComponent } from "../../base/base.component";

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.css"]
})
export class UserLoginComponent extends BaseComponent implements OnInit {
  message: string = "";
  user: User = new User();
  constructor(
    private userSvc: UserService,
    protected sysSvc: SystemService,
    private router: Router
  ) {
    super(sysSvc);
  }
  ngOnInit() {
    // defaulting uname and pwd for testing purposes
    this.user.userName = "IPFree";
    this.user.password = "easy2345";
    this.sysSvc.loggedInUser = null;
  }
  login() {
    this.userSvc.login(this.user).subscribe(jr => {
      if (jr.errors == null) {
        if (jr.data == null || jr.data.length == 0) {
          // no error but still no user???
          this.message = "Invalid Username/Password combo.  Retry";
        } else {
          // should be g2g!
          this.user = jr.data as User;
          this.sysSvc.loggedInUser = this.user;
          // good login navigate to 'home' / 'welcome' page
          this.router.navigateByUrl("/users/list");
        }
      } else {
        this.message = "Invalid Username/Password combo.  Retry";
      }
    });
  }
}
