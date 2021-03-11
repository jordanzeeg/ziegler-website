import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class FsItemService {

  itemsCollection: AngularFirestoreCollection<Item> | undefined;
  items: Observable<Item[]>; //change to item[]

  constructor(public afs: AngularFirestore) {
    this.items = this.afs.collection('items').valueChanges();
   }
   getItems() {
     return this.items;
   }
   setItems(Items: Item[]){
     //TODO: implement this
   }
   updateItems(Items: Item[]) {
      //TODO: implement this
   }
   deleteItems(Items: Item[]) {
     //TODO: implement this
   }
}



