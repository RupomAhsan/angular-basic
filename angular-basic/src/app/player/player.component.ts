import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../_services/players.service';
import { Router } from '@angular/router';
import { Players } from '../_models/players';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  players: Players[];

  constructor(private playerService: PlayersService,
    private router: Router) { }

  ngOnInit() {
    this.getPlayers();
  }

  private getPlayers(): void {
    this.playerService.getPlayers()
      .subscribe(players => this.players = players);
  }

  addPlayer(): void {
    this.router.navigate(['/playerDetail', -1]);
  }

  deletePlayer(id: number): void {
    if (confirm("Delete this player?")) {
      this.playerService.deletePlayer(id)
        .subscribe(() => this.players = this.players.filter(p => p.id != id));
    }
  }
}
