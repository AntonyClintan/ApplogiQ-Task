import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  color = new Subject();
  constructor() { }
}
