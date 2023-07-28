import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  
    showLoginMessage = false;
  

  cartItems: any[] = [];

  constructor(private cartService: CartService, private route: ActivatedRoute) {}

 
    ngOnInit() {
      // Obtener la propiedad 'showLoginMessage' del estado de la ruta actual
      this.route.paramMap.subscribe(params => {
        this.showLoginMessage = history.state.showLoginMessage || false;
      });
      this.cartItems = this.cartService.cartItems;
      
      // Resto del código del componente...
    }
    
   
  }




