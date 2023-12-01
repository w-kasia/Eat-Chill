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

  isSubmit = true;
  submitMessage = '';

 firestore: Firestore = inject(Firestore);

 @ViewChild('f') contactForm: any;

  saveData(): void {
    const acollection = collection(this.firestore, 'client');
    addDoc(acollection, {
      'name': this.contactForm.value.name,
      'email': this.contactForm.value.email,
      'phone': this.contactForm.value.phone,
      'message': this.contactForm.value.message
    })
   }

   onSubmit(form: NgForm) {
    this.isSubmit = true;
    this.submitMessage = 'Message send successfully';
    this.saveData();
    form.resetForm();
    setTimeout(() => {
        this.isSubmit = false;
      }, 4000)
  }
}
