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

  constructor(private categoryService: ClubService) { }

  ngOnInit() {
    this.getCategories();
  }

  private getCategories(): void {
    this.categoryService.getClubs()
      .subscribe(clubs => this.clubs = clubs);
  }
}
