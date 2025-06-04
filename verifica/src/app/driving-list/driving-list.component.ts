import { Component, Input } from '@angular/core';
import { Macchine } from '../models/driving.model';

@Component({
  selector: 'app-driving-list',
  standalone: true,
  imports: [],
  templateUrl: './driving-list.component.html',
  styleUrl: './driving-list.component.css'
})
export class DrivingListComponent {
  @Input() macchina! : Macchine

  aggiungi(){
    console.log(" Titolo: " + this.macchina.tipo + " Descrizione: " + this.macchina.descrizione + " Tariffa: " + this.macchina.tariffa + " Valutazione Media: " + this.macchina.valutazionemedia)
  }
}
