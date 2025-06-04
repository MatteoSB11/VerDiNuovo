import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Macchine } from './models/driving.model';
import { DrivingListComponent } from './driving-list/driving-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DrivingListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'verifica';
  loading! : boolean
  obs! : Observable<Macchine[]>
  http : HttpClient
  vettMacchine : Macchine[] = []

  constructor(http : HttpClient){this.http = http}

  makeRichiesta(){
    this.loading = true
    this.obs = this.http.get<Macchine[]>('https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi')
    this.obs.subscribe(this.getData)
  }

  getData = (d : Macchine[]) => {
    this.vettMacchine = d
    this.loading = false
  }
  ngOnInit(): void {
    this.makeRichiesta()
  }
}
