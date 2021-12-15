import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import ListaFirebaseDto from 'src/app/models/interfaces/listas-firebase.dto';

@Component({
  selector: 'app-dialog-create-list',
  templateUrl: './dialog-create-list.component.html',
  styleUrls: ['./dialog-create-list.component.css']
})
export class DialogCreateListComponent implements OnInit {

  lista = new ListaFirebaseDto();
  uid !: any;

  listForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  createList() {
    this.uid = localStorage.getItem('uid');
    this.firestore.collection(`users/${this.uid}/listas`).doc(this.lista.id)
  }

}
