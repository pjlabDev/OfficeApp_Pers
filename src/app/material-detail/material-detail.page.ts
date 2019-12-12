import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { MaterialsService } from '../materials.service';
import { Material } from '../models/material.model';


@Component({
  selector: 'app-material-detail',
  templateUrl: './material-detail.page.html',
  styleUrls: ['./material-detail.page.scss'],
})
export class MaterialDetailPage implements OnInit {
  public loadedMaterial: Material;
  constructor(private materialService: MaterialsService, private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('materialId')){
        this.navCtrl.navigateBack('/materials');
        return;
      }
  
      this.materialService.getMaterial(paramMap.get('materialId')).subscribe(material =>{
        this.loadedMaterial = material;
      });
    });
  }

}
