import { Component,Optional } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';


@Component({
  selector: 'angular-material',
  templateUrl: './angularMaterial.html',
  styleUrls: ['./angularMaterial.css'],
})
export class AngularMaterialComponent {


  isDarkTheme: boolean = false;
  lastDialogResult: string;

  foods: any[] = [
    { name: 'Pizza', rating: 'Excellent' },
    { name: 'Burritos', rating: 'Great' },
    { name: 'French fries', rating: 'Pretty good' },
  ];

  progress: number = 0;

  constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar) {
    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }

  openDialog() {

}}

