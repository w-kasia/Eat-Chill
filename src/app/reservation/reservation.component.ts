import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{

  reservationForm!: FormGroup;

  occasions: any = ['Eat & Chill', 'Birthday', 'Annivarsary'];
  numbers: any = ['1', '2', '3', '4', '5'];

  isSubmit = true;
  submitMessage = '';

  // maxDate: any = '2024-01-01';

  //czas nie działa w firefox, poprawić
  currentDate: any = new Date();
  // currentTime: any = this.currentDate.getHours() + ":" + this.currentDate.getMinutes();

  currentTime: any = this.currentDate;

  ngOnInit() {
    this.reservationForm = new FormGroup({
      'clientData': new FormGroup({
        'name': new FormControl('', Validators.required),
        'email': new FormControl('', [Validators.required, Validators.email]),
        'phone': new FormControl('', [Validators.required, Validators.pattern('[0-9]{9}')])
      }),
      'reservationDetails': new FormGroup({
        'date': new FormControl('', Validators.required),
        'time': new FormControl('', Validators.required),
        'numbers': new FormControl('', Validators.required),
        'occasions': new FormControl('', Validators.required),
        'message': new FormControl('')
      })
    });
  }

  firestore: Firestore = inject(Firestore);

  saveData(): void {
    const acollection = collection(this.firestore, 'reservation');

    addDoc(acollection, {
      'name': this.reservationForm.value.clientData.name,
      'email': this.reservationForm.value.clientData.email,
      'phone': this.reservationForm.value.clientData.phone,
      'date': this.reservationForm.value.reservationDetails.date,
      'time': this.reservationForm.value.reservationDetails.time,
      'numbers': this.reservationForm.value.reservationDetails.numbers,
      'occasions': this.reservationForm.value.reservationDetails.occasions,
      'message': this.reservationForm.value.reservationDetails.message
    })
  }

  onSubmit() {
    this.isSubmit = true;
    this.submitMessage = 'Message send successfully';
    this.saveData();
    this.reservationForm.reset();
    setTimeout(() => {
      this.isSubmit = false;
    }, 4000)
  }
}