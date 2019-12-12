import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MaterialsService } from '../materials.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Material } from '../models/material.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-material-buy',
  templateUrl: './material-buy.page.html',
  styleUrls: ['./material-buy.page.scss'],
})
export class MaterialBuyPage implements OnInit {
  form: FormGroup;
  public loadedMaterial: Material;

  constructor(
    private materialService: MaterialsService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private router: Router,
    private cartService: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('materialId')) {
        this.navCtrl.navigateBack('/materials');
        return;
      }

      this.materialService.getMaterial(paramMap.get('materialId')).subscribe(material => {
        this.loadedMaterial = material;

        this.form = new FormGroup({
          quantity: new FormControl(this.loadedMaterial.quantity, {
            updateOn: 'change',
            validators: [Validators.required, Validators.min(1)]
          })
        });
      });
    });
  }

  getPricexQuantity() {
    let cant = 0;
    // tslint:disable-next-line: radix
    const precio: number = parseInt((document.getElementById('precio') as HTMLInputElement).value);
    const cantidad = (document.getElementById('cantidad') as HTMLInputElement).value;

    // tslint:disable-next-line: radix
    cant = cant + (parseInt(cantidad) * precio);
    document.getElementById('precioFinal').innerHTML = cant.toString() + ' €';
  }


  buyMaterial() {
    this.materialService.updateMaterialByBuy(
      this.loadedMaterial.id)
    .subscribe(() => {
      this.toastCtrl.create({
        animated: true,
        duration: 4000,
        position: 'top',
        showCloseButton: true,
        message: 'El elemento se compró correctamente'
      }).then(toastEl => {
        toastEl.present();
        this.router.navigate(['/materials']);
      });
    });
  }

  addToCart(product) {
    window.alert('Material añadido al carrito!');
    this.cartService.addToCart(product);
  }

}
