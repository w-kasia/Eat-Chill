import { Component, ViewChild, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 firestore: Firestore = inject(Firestore);

 @ViewChild('f') messageForm: any;

  saveData(): void {
    const acollection = collection(this.firestore, 'client');
    addDoc(acollection, {
      'name': this.messageForm.value.name,
      'email': this.messageForm.value.email,
      'phone': this.messageForm.value.phone,
      'message': this.messageForm.value.message
    })
   }

   onSubmit(form: NgForm) {
    console.log(form.submitted);
    this.saveData();
    form.resetForm();

  }
}
