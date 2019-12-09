import { Component, Input } from '@angular/core';
import { Player } from '../player.service';

@Component({
  selector: '[app-player-row]',
  templateUrl: './player-row.component.html',
  styleUrls: ['./player-row.component.scss']
})
export class PlayerRowComponent {
  @Input()
  player: Player;

  @Input()
  deletePlayer: (Player) => void;

  edit = false;

  constructor() {}

  toggleEdit() {
    this.edit = !this.edit;
  }

  save(jerseyNumber, name, team, position) {
    this.player.jersey_number = jerseyNumber;
    this.player.name = name;
    this.player.position = position;
    this.player.team = team;
    this.toggleEdit();
  }
}
