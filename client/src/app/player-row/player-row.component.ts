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

  constructor() { }
}
