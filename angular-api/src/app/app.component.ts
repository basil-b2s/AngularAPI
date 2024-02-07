import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiCallService } from './api-call.service';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'angular-api';

  constructor(private getApi : ApiCallService){}

  // ngOnInit(){
  //   this.getApi.getData().subscribe((res) => {
  //     console.log(res)
  //   })
  // }

  trueApiCall(){
    this.getApi.getData().subscribe((res) => {
      console.log(res)
    })
  }
}
