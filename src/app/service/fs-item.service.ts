import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, fromDocRef } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { Soapbox } from '../models/soapbox';
import { ApicallerService } from './apicaller.service';

@Injectable({
  providedIn: 'root'
})
export class FsItemService {

  error:any;
  itemsCollection: AngularFirestoreCollection<Item> | undefined;
  items = new Observable<Item[]>(); //change to item[]

  createdTime: Date = new Date();
  constructor(public afs: AngularFirestore, private apiservite: ApicallerService) {
    
   }
   getItems() {
     return this.afs.collection('items').valueChanges();;
   }
   getSoapboxes() {
     return this.afs.collection('soapboxes').valueChanges();
   }
   getChallenges(){
    return this.afs.collection("coding-challenges").valueChanges();
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
   soapboxSubmit(title:string, description:string, createdBy:string) {
    return this.afs.collection('soapboxes').add({
      title: title,
      tescription: description,
      createdBy: createdBy,
      createdTime: this.createdTime.toString()
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      this.error = error;
    });
   }
   challengeSubmit(title1: string, question1:string, code1: string, programmingLanguage1:string, createdBy1:string){
    
    //TODO: api call for code beautifying
    //GET or POST to http://hilite.me/api with these parameters:
                                                         //probably need to actually launch my own per github description if i want it
    
    return this.afs.collection('coding-challenges').add({
      title: title1,
      question: question1,
      code: code1,
      codingLanguage: programmingLanguage1.toString(),
      createdBy: createdBy1,
      createdTime: this.createdTime.toString()
    })
    .then((docRef)=> {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error)=> {
      console.error("Error adding document: ", error);
      this.error = error;
    });
   }


}



