import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayerService, Player } from './player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  players: Player[] = []
  constructor(private playerService: PlayerService) {
  }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(players => {
      this.players = players
    })
  }


}
