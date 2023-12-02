import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  private menuOptions = [
    {type: 'Pizza', items: [
      { name: 'Italian Club',
        ingredients: 'marinara, mozzarella, pepperoni, Canadian bacon, salami, bacon',
        price: '$35'},
        { name: 'Vin Monster',
        ingredients: 'marinara, mozzarella, pepperoni, crumbled Italian sausage, mushrooms, kalamata olives',
        price: '$35'},
        { name: 'Angry Pig',
        ingredients: 'spicy bbq sauce, mozzarella, crumbled Italian sausage, bacon, jalapeños, cheddar',
        price: '$35'},
        { name: 'The Popeye',
        ingredients: 'oil base, mozzarella, fresh spinach, roasted garlic, feta, roasted red peppers, red onions',
        price: '$35'},
        { name: 'The Krewe',
        ingredients: 'marinara, mozzarella, pepperoni, bacon, cheddar, feta, parmesan',
        price: '$35'},
        { name: 'Jalapeno Popper',
        ingredients: 'alfredo sauce, blackened chicken, bacon, cheddar, and jalapenos',
        price: '$35'}
    ]},
    {type: 'Burger', items: [
      { name: 'Big Boy Burger',
        ingredients: 'double patty, fried jalapeños, cheddar cheese, BBQ sauce, fried onion rings, toasted brioche bun',
        price: '$35'},
        { name: 'Classic Burger',
        ingredients: 'angus beef, lettuce, tomato, onions, pickles, mayo',
        price: '$35'},
        { name: 'Chili Cheese',
        ingredients: 'angus beef, house-made chili, queso, onions, pickles',
        price: '$35'},
        { name: 'Mushroom Burger',
        ingredients: 'angus beef, lettuce, caramelized onions, roasted mushrooms, smoked gouda cheese, garlic-herb mayo',
        price: '$35'},
        { name: 'ImpossibleTM',
        ingredients: 'Plant based patty, lettuce, tomato, onions, pickles, vegan aioli',
        price: '$35'},
        { name: 'Smoke Stack',
        ingredients: 'angus beef stacked with pulled pork, mac & cheese, fried egg, slaw, mayo',
        price: '$35'}
    ]},
    {type: 'Pasta', items: [
      { name: 'Chicken Parm Pasta',
        ingredients: 'fried chicken, spaghetti, red gravy, mozzarella, baked, finished with fresh basil, black pepper, parmesan, asiago',
        price: '$35'},
        { name: 'Fried Shrimp Alfredo',
        ingredients: 'penne, alfredo, fried shrimp ',
        price: '$35'},
        { name: 'Spaghetti & Meatballs',
        ingredients: 'spaghetti, Italian meatballs, red gravy',
        price: '$35'},
        { name: 'Bacon Mac & Cheese Pie',
        ingredients: 'bacon, alfredo, cheddar, and crispy bacon pieces',
        price: '$35'},
        { name: 'In-House Lasagna',
        ingredients: 'ricotta, mozzarella, marinara sauce, crumbled sausage, meatballs, red gravy, mozzarella cheese',
        price: '$35'},
        { name: 'Chicken Alfredo',
        ingredients: 'penne, alfredo, blackened chicken',
        price: '$35'}
    ]},
    {type: 'Desserts', items: [
      { name: 'Bread Pudding Bites',
        ingredients: 'flash fried bread pudding bites, vanilla bean mousse, caramel, vanilla syrup',
        price: '$35'},
        { name: 'Root Beer Float',
        ingredients: 'root beer with a scoop of vanilla ice cream.',
        price: '$35'},
        { name: 'Chocolate Chip Brownie',
        ingredients: 'chocolate chip brownie topped with vanilla ice cream, & drizzled with your choice of chocolate or caramel sauce',
        price: '$35'},
        { name: 'Cinnabites',
        ingredients: 'freshly baked cinnamon & sugar bites drizzled with vanilla sauce, & served with ice cream topped with caramel sauce.',
        price: '$35'},
        { name: 'Gingerbread Cake',
        ingredients: 'orange Pastry Cream, espresso Buttercream, ginger Cookies',
        price: '$35'},
        { name: 'Black Forest',
        ingredients: 'whipped white chocolate ganache, brandied cherries, brandied cherry buttercream, chocolate trees',
        price: '$35'},
    ]},
    {type: 'Coctails', items: [
      { name: 'Third Street Sour',
        ingredients: 'Great Jones Straight Bourbon, pear puree, fresh lemon juice, simple syrup, dash cardamom bitters, dry red wine for float',
        price: '$35'},
        { name: 'Pradaise Coupe',
        ingredients: 'Great Jones Four Grain Bourbon, fresh lemon juice, demerara sugar syrup, drops Bourbon vanilla tincture,lemon zest',
        price: '$35'},
        { name: 'Empire State Cobbler',
        ingredients: 'Great Jones Straight Bourbon, apple cider, fresh lemon juice, strained, Orgeat syrup, dehydrated apple slice, nutmeg for grinding',
        price: '$35'},
        { name: 'Ice Pick',
        ingredients: 'Great Jones Four Grain Bourbon, dessert wine (such as Pindar Riesling), fresh lemon juice, large lemon peel',
        price: '$35'},
    ]}
  ];

  getMenuItems() {
    return this.menuOptions;
  }
}