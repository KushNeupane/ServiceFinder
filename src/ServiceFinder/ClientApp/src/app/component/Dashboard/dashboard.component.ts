import { Component, OnInit } from '@angular/core';
import { AuthServices } from 'src/app/services/common/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public role: string;
  title = " Dashboard";

  constructor(private authService: AuthServices) { }

  ngOnInit() {
    this.role = this.authService.getRole();
  }
}
