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

  reservationForm: FormGroup;

  occasions: string[] = ['Eat & Chill', 'Birthday', 'Annivarsary', 'Business meeting'];


  // maxDate: any = '2024-01-01';

  //czas nie działa w firefox, poprawić
  currentDate: any = new Date();
  // currentTime: any = this.currentDate.getHours() + ":" + this.currentDate.getMinutes();

  // currentTime: any = this.currentDate;

  ngOnInit() {
    this.reservationForm = new FormGroup({
      'clientData': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'surname': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'phone': new FormControl(null, [Validators.required, Validators.pattern('[0-9]{9}')])
      }),
      'reservationDetails': new FormGroup({
        'date': new FormControl(null, Validators.required),
        'time': new FormControl(null, Validators.required),
        'numbers': new FormControl(null, Validators.required),
        'occasions': new FormControl(null, Validators.required),
        'message': new FormControl(null)
      })
    });
  }

  firestore: Firestore = inject(Firestore);

  saveData(): void {
    const acollection = collection(this.firestore, 'reservation');

    addDoc(acollection, {
      'name': this.reservationForm.value.clientData.name,
      'surname': this.reservationForm.value.clientData.surname,
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
    this.saveData();
    this.reservationForm.reset();
  }
}
