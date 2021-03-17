import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, fromDocRef } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class FsItemService {

  error:any;
  itemsCollection: AngularFirestoreCollection<Item> | undefined;
  items: Observable<Item[]>; //change to item[]

  constructor(public afs: AngularFirestore) {
    this.items = this.afs.collection('items').valueChanges();
   }
   getItems() {
     return this.items;
   }
   addItems(Items: Item[]){ //written from firebase docs (although I'm adding array of items when they only add single item)
     this.afs.collection('items').add(Items).then((fromDocRef) => {
       console.log("Document written with ID: ", fromDocRef.id);
     })
     .catch((error) => {
       console.error("Error adding document: ", error);
     });
   }
   updateItems(Items: Item[]) {
      //TODO: implement this, also think about what this is
   }
   deleteItems(Items: Item[]) {
     //TODO: implement this
   }
   soapboxSubmit(title:string, description:string) {
    return this.afs.collection('soapboxes').add({
      Title: title,
      Description: description
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      this.error = error;
    });
   }
   challengeSubmit(title: string, question:string, code: string, programmingLanguage:string, createdBy:string, createdTime:Date){
    return this.afs.collection('challenges').add({
      Title: title,
      Question: question,
      Code: code,
      ProgrammingLanguage: programmingLanguage,
      CreatedBy: createdBy,
      CreatedTime: createdTime
    })
    .then((docRef)=> {
      console.log("Document written ith ID: ", docRef.id);
    })
    .catch((error)=> {
      console.error("Error adding document: ", error);
      this.error = error;
    });
   }
}



