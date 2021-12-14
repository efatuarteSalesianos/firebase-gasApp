import { GasolinerasService } from 'src/app/services/gasolineras.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListaEESSPrecio } from 'src/app/models/interfaces/gasolineras.interface';

export interface GasolineraDetailDialogData {
  gasolinera: ListaEESSPrecio;
}

@Component({
  selector: 'app-dialog-gasolinera-detail',
  templateUrl: './dialog-gasolinera-detail.component.html',
  styleUrls: ['./dialog-gasolinera-detail.component.css']
})
export class DialogGasolineraDetailComponent implements OnInit {

  gasolinera!: ListaEESSPrecio;

  constructor(@Inject(MAT_DIALOG_DATA) private data: GasolineraDetailDialogData, private gasolineraService: GasolinerasService) { }

  ngOnInit(): void {
      this.gasolinera = this.data.gasolinera;
  }

  openMaps() {
    let url = "https://www.google.com/maps/dir/37.383399,-6.0118481/37.383399,-6.0118481/" + this.gasolinera.direccion + "+" + this.gasolinera.Localidad + "+" + this.gasolinera.Provincia + "/@" + this.gasolinera.Latitud + "d" + this.gasolinera.longitud;
    window.open(url);
  }

}
