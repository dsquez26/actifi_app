import { Component } from '@angular/core';
import { PlayerService, Player } from './player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  page: number;
  pageSize: number = 10;
  players: Player[] = [];
  showNewRow = false;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.playerService.getPlayers().subscribe(players => {
      this.players = players;
    });
  }

  toggleShowNewRow = () => {
    this.showNewRow = !this.showNewRow;
  };
  changePageSize(event) {
    this.pageSize = Number(event.target.value);
  }
  changePage(page: number) {
    this.page = page;
  }
  deletePlayer = (player: Player) => {
    this.players = this.players.filter(p => p != player);
  };
  newPlayer = (player: Player) => {
    this.players.unshift(player);
    this.changePage(1);
    this.toggleShowNewRow();
  };
}
