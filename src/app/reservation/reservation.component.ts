import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{

  reservationForm!: FormGroup;

  ngOnInit() {
    this.reservationForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, Validators.required),
      'date': new FormControl(null, Validators.required),
      'number': new FormControl(null, Validators.required),
      'occasion': new FormControl(null, Validators.required),
      'message': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.reservationForm);
  }
}
