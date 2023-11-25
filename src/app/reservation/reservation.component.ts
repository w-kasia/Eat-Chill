
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{

  reservationForm!: FormGroup;

  occasions: any = ['Eat & Chill', 'Birthday', 'Annivarsary'];
  numbers: any = ['1', '2', '3', '4', '5'];

  // maxDate: any = '2024-01-01';

  currentDate: any = new Date();
  currentTime: any = this.currentDate.getHours() + ":" + this.currentDate.getMinutes() + ":" + this.currentDate.getSeconds();


  ngOnInit() {
    this.reservationForm = new FormGroup({
      'clientData': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'phone': new FormControl(null, [Validators.required, Validators.pattern('[0-9]{9}')])
      }),
      'reservationDetails': new FormGroup({
        'date': new FormControl(null, Validators.required),
        'numbers': new FormControl(null, Validators.required),
        'occasions': new FormControl(null, Validators.required),
        'message': new FormControl(null)
      })

    });
  }



  onSubmit() {
    //dodać reset
  }

 
}
