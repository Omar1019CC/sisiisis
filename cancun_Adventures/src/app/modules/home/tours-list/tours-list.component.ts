import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TourService } from 'src/app/services/tours.service';

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.css'],
})
export class ToursListComponent implements OnInit {
  tours: any;
  data: any;
  imgName: any;
  assetPath = '.assets/img/';

  constructor(
    private tourService: TourService,
    private router: Router
  ) {}

  ngOnInit() {
    this.tourService.getTours().subscribe((data: any) => {
      this.tours = data;

      this.loadImage();
    });
  }

  loadImage(): void {
    this.tourService.getImageName().subscribe((imgName: string) => {
      this.imgName = imgName;
    });
  }

  redirectToTour(tourId: number): void {
    this.router.navigate(['/tour', tourId]);
  }
}
