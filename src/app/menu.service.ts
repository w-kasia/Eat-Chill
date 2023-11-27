import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  private menuOptions = [
    {type: 'Appetizers', items: [
      { name: 'Bruschetta',
        ingredients: 'lorem, lorem, lorem, lorem, lorem, lorem, lorem',
        price: '$35'},
        { name: 'Bruschetta',
        ingredients: 'lorem, lorem, lorem, lorem, lorem, lorem, lorem',
        price: '$35'},
        { name: 'Bruschetta',
        ingredients: 'lorem, lorem, lorem, lorem, lorem, lorem, lorem',
        price: '$35'},
        { name: 'Bruschetta',
        ingredients: 'lorem, lorem, lorem, lorem, lorem, lorem, lorem',
        price: '$35'},
    ]},
    {type: 'Main Course', items: [
      { name: 'Schabowy',
        ingredients: 'lorem, lorem, lorem, lorem, lorem, lorem, lorem',
        price: '$35'},
        { name: 'Bruschetta',
        ingredients: 'lorem, lorem, lorem, lorem, lorem, lorem, lorem',
        price: '$35'},
        { name: 'Bruschetta',
        ingredients: 'lorem, lorem, lorem, lorem, lorem, lorem, lorem',
        price: '$35'},
        { name: 'Bruschetta',
        ingredients: 'lorem, lorem, lorem, lorem, lorem, lorem, lorem',
        price: '$35'},
    ]},
    {type: 'For kids', items: [
      { name: 'Frytki',
        ingredients: 'lorem, lorem, lorem, lorem, lorem, lorem, lorem',
        price: '$35'},
        { name: 'Bruschetta',
        ingredients: 'lorem, lorem, lorem, lorem, lorem, lorem, lorem',
        price: '$35'},
        { name: 'Bruschetta',
        ingredients: 'lorem, lorem, lorem, lorem, lorem, lorem, lorem',
        price: '$35'},
        { name: 'Bruschetta',
        ingredients: 'lorem, lorem, lorem, lorem, lorem, lorem, lorem',
        price: '$35'},
    ]},
    {type: 'Coctails', items: [
      { name: 'Bruschetta',
        ingredients: 'lorem, lorem, lorem, lorem, lorem, lorem, lorem',
        price: '$35'},
        { name: 'Bruschetta',
        ingredients: 'lorem, lorem, lorem, lorem, lorem, lorem, lorem',
        price: '$35'},
        { name: 'Bruschetta',
        ingredients: 'lorem, lorem, lorem, lorem, lorem, lorem, lorem',
        price: '$35'},
        { name: 'Bruschetta',
        ingredients: 'lorem, lorem, lorem, lorem, lorem, lorem, lorem',
        price: '$35'},
    ]},
    {type: 'Vege', items: [
      { name: 'Bruschetta',
        ingredients: 'lorem, lorem, lorem, lorem, lorem, lorem, lorem',
        price: '$35'},
        { name: 'Bruschetta',
        ingredients: 'lorem, lorem, lorem, lorem, lorem, lorem, lorem',
        price: '$35'},
        { name: 'Bruschetta',
        ingredients: 'lorem, lorem, lorem, lorem, lorem, lorem, lorem',
        price: '$35'},
        { name: 'Bruschetta',
        ingredients: 'lorem, lorem, lorem, lorem, lorem, lorem, lorem',
        price: '$35'},
    ]}
  ];

  getMenuItems() {
    return this.menuOptions;
  }
}
