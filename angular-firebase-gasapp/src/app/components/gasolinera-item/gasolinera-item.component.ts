import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GasolinerasListResponse, ListaEESSPrecio } from 'src/app/models/interfaces/gasolineras.interface';
import { GasolinerasFirebaseService } from 'src/app/services/gasolineras-firebase.service';
import { DialogGasolineraDetailComponent } from '../dialog-gasolinera-detail/dialog-gasolinera-detail.component';

@Component({
  selector: 'app-gasolinera-item',
  templateUrl: './gasolinera-item.component.html',
  styleUrls: ['./gasolinera-item.component.css']
})
export class GasolineraItemComponent implements OnInit {
  @Input() gasolinera!: ListaEESSPrecio;

  constructor(private dialog: MatDialog, private gasolineraFirebaseService: GasolinerasFirebaseService) { }

  ngOnInit(): void {
    console.log(this.gasolinera);
  }

  addFavorito() {
    this.gasolineraFirebaseService.addFavorite(this.gasolinera).then(resp => {

    });
  }

  openDialogGasolineraDetail() {
    this.dialog.open(DialogGasolineraDetailComponent, {
      width: '550px',
      disableClose: false,
      data: { gasolinera : this.gasolinera }
    });
  }

}
