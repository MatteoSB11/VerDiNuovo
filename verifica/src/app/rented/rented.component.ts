import { Component, Input } from '@angular/core';
import { RentModel } from '../models/rent.model';

@Component({
  selector: 'app-rented',
  standalone: true,
  imports: [],
  templateUrl: './rented.component.html',
  styleUrl: './rented.component.css'
})
export class RentedComponent {
  @Input() macchi! : RentModel

}
