import { Component } from '@angular/core';
import { ColorService } from './service/color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private colorService:ColorService){}

  ngOnInit(): void {}

  btnColor(color:any){
    this.colorService.color.next(color)
  }
}
