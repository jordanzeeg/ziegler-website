import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { ApicallerService } from './apicaller.service';

import { FsItemService } from './fs-item.service';

describe('FsItemService', () => {
  let service: FsItemService;

  beforeEach(() => {
    const afsSpy = jasmine.createSpyObj<AngularFirestore>(['collection'])
    const apiserviteSpy = jasmine.createSpyObj<ApicallerService>(['getPrettyCode'])
    service = new FsItemService(afsSpy,apiserviteSpy)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  //getItems
  //getSoapboxes
  //getChallenges
  //addItems
  //updateItems
  //deleteItems
  //soapboxSubmit
  //challengeSubmit
  
});
