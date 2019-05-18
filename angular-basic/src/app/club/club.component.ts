import { Component, OnInit } from '@angular/core';
import { ClubService } from '../_services/club.service';
import { Club } from '../_models/club';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {
  clubs: Club[];

  constructor(private clubService: ClubService) { }

  ngOnInit() {
    this.getClubs();
  }

  private getClubs(): void {
    this.clubService.getClubs()
      .subscribe(clubs => this.clubs = clubs);
  }
}
