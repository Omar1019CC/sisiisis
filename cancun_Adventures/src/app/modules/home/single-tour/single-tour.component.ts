
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TourService } from 'src/app/services/tours.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-single-tour',
  templateUrl: './single-tour.component.html',
  styleUrls: ['./single-tour.component.css']
})
export class SingleTourComponent implements OnInit {
  imgUrl: SafeResourceUrl;
  tours: any;
  tour: any;

  constructor(
    private sanitizer: DomSanitizer,
    private tourService: TourService,
    private route: ActivatedRoute,
    private cartService: CartService,
  ) {
    this.imgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(''); 
  }

  ngOnInit() {
    if (this.route && this.route.params) {
      this.route.params
        .pipe(switchMap((params) => this.tourService.getTourById(params['id'])))
        .subscribe((tour: any) => {
          this.tour = tour;
          this.imgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            'assets/img/' + tour.img
          );
        });
    }

    this.tourService.getTours().subscribe((tours) => {
      this.tours = tours;
    });
  }

 
  addToCart() {
    this.cartService.addToCart(this.tour);
    Swal.fire({
      title: 'Producto añadido al carrito exitosamente!',
 
      icon: 'success', // También puedes usar 'error', 'warning', 'info', 'question'
      confirmButtonText: 'Aceptar',
      customClass: {
        confirmButton: 'btn-custom-color', // Aquí especificamos la clase CSS personalizada
      },
    });
  }
  

  
}
