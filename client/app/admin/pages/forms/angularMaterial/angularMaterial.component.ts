import {Component} from '@angular/core';



@Component({
   moduleId: module.id,
  selector: 'material',
  templateUrl: './angularMaterial.html',
  styleUrls: ['./angularMaterial.css'],
})
export class AngularMaterialComponent {
  favoriteSeason: string;

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
}