import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/service/color.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  color:any;
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.colorService.color.subscribe(color=>{
      this.color = color
    })
  }
}
