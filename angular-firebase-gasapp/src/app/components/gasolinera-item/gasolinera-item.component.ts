import { DialogCreateListComponent } from './../dialog-create-list/dialog-create-list.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map } from 'rxjs';
import { GasolinerasListResponse, ListaEESSPrecio } from 'src/app/models/interfaces/gasolineras.interface';
import ListaFirebaseDto from 'src/app/models/interfaces/listas-firebase.dto';
import { GasolinerasFirebaseService } from 'src/app/services/gasolineras-firebase.service';
import { ListasFirebaseService } from 'src/app/services/listas-firebase.service';
import { DialogGasolineraDetailComponent } from '../dialog-gasolinera-detail/dialog-gasolinera-detail.component';

@Component({
  selector: 'app-gasolinera-item',
  templateUrl: './gasolinera-item.component.html',
  styleUrls: ['./gasolinera-item.component.css']
})
export class GasolineraItemComponent implements OnInit {

  @Input() gasolinera!: ListaEESSPrecio;

  listasList!: ListaFirebaseDto[];

  constructor(private dialog: MatDialog, private gasolineraFirebaseService: GasolinerasFirebaseService, private listasFirebaseService: ListasFirebaseService) { }

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

  getAllLists(): void {
    this.listasFirebaseService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.listasList = data;
    });
  }

  openDialogCreateList() {
    this.dialog.open(DialogCreateListComponent, {
      width: '550px',
      disableClose: false,
      data: { gasolinera : this.gasolinera }
    });
  }

}
