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
  title = 'angular-api';
  data : any;
  constructor(private getApi : ApiCallService){}



  trueApiCall(){
    this.getApi.getData().subscribe((res) => {
      this.data = res.title
      console.log(res)
    })
  }

  fakeApiCall(){
    this.getApi.getFakeData().subscribe((res) =>{
      console.log(res)
    },
    error => {
      console.error('Error Occured : ', error)
    })
  }
}
