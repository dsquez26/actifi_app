import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-new-player-row]',
  templateUrl: './new-player-row.component.html',
  styleUrls: ['./new-player-row.component.scss']
})
export class NewPlayerRowComponent implements OnInit {
  @Input()
  newPlayer;

  @Input()
  cancelNewPlayer: () => void;

  constructor() { }

  ngOnInit() { }

  save(jersey_number, name, team, position) {
    this.newPlayer({ jersey_number, name, team, position });
  }
}
