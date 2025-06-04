import { Component, Input } from '@angular/core';
import { Macchine } from '../models/driving.model';
import { RentModel } from '../models/rent.model';

@Component({
  selector: 'app-driving-list',
  standalone: true,
  imports: [],
  templateUrl: './driving-list.component.html',
  styleUrl: './driving-list.component.css'
})
export class DrivingListComponent {
  @Input() macchina! : Macchine
  @Input() macchs! : RentModel[]

  aggiungi(nNoleggio : HTMLInputElement){
    console.log(" Titolo: " + this.macchina.tipo + " Descrizione: " + this.macchina.descrizione + " Tariffa: " + this.macchina.tariffa + " Valutazione Media: " + this.macchina.valutazionemedia + " Numero noleggi: " + nNoleggio.value)
    this.macchs.push(new RentModel(this.macchina.tipo, this.macchina.descrizione, this.macchina.tariffa, this.macchina.valutazionemedia, nNoleggio.value))
  
  }
}
