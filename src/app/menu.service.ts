import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  private menuOptions = [
    {type: 'Pizza',
    icon: 'assets/icons/icon-pizza.svg',
    items: [
      { name: 'Italian Club',
        ingredients: 'marinara, mozzarella, pepperoni, Canadian bacon, salami, bacon'
        },
        { name: 'Vin Monster',
        ingredients: 'marinara, mozzarella, pepperoni, crumbled Italian sausage, mushrooms, kalamata olives'
        },
        { name: 'Angry Pig',
        ingredients: 'spicy bbq sauce, mozzarella, crumbled Italian sausage, bacon, jalapeños, cheddar'
        },
        { name: 'The Popeye',
        ingredients: 'oil base, mozzarella, fresh spinach, roasted garlic, feta, roasted red peppers, red onions'
        },
        { name: 'The Krewe',
        ingredients: 'marinara, mozzarella, pepperoni, bacon, cheddar, feta, parmesan'
        },
        { name: 'Jalapeno Popper',
        ingredients: 'alfredo sauce, blackened chicken, bacon, cheddar, and jalapenos'
        },
        { name: 'The Popeye',
        ingredients: 'oil base, mozzarella, fresh spinach, roasted garlic, feta, roasted red peppers, red onions'
        },
        { name: 'The Krewe',
        ingredients: 'marinara, mozzarella, pepperoni, bacon, cheddar, feta, parmesan'
        },
        { name: 'Jalapeno Popper',
        ingredients: 'alfredo sauce, blackened chicken, bacon, cheddar, and jalapenos'
        }
    ]},
    {type: 'Burger',
    icon: 'assets/icons/icon-burger.svg',
    items: [
      { name: 'Big Boy Burger',
        ingredients: 'double patty, fried jalapeños, cheddar cheese, BBQ sauce, fried onion rings, toasted brioche bun'
        },
        { name: 'Classic Burger',
        ingredients: 'angus beef, lettuce, tomato, onions, pickles, mayo'
        },
        { name: 'Chili Cheese',
        ingredients: 'angus beef, house-made chili, queso, onions, pickles'
        },
        { name: 'Mushroom Burger',
        ingredients: 'angus beef, lettuce, caramelized onions, roasted mushrooms, smoked gouda cheese, garlic-herb mayo'
        },
        { name: 'ImpossibleTM',
        ingredients: 'Plant based patty, lettuce, tomato, onions, pickles, vegan aioli'
        },
        { name: 'Smoke Stack',
        ingredients: 'angus beef stacked with pulled pork, mac & cheese, fried egg, slaw, mayo'
        }
    ]},
    {type: 'Pasta',
    icon: 'assets/icons/icon-pasta.svg',
    items: [
      { name: 'Chicken Parm Pasta',
        ingredients: 'fried chicken, spaghetti, red gravy, mozzarella, baked, finished with fresh basil, black pepperparmesan, asiago'
        },
        { name: 'Fried Shrimp Alfredo',
        ingredients: 'penne, alfredo, fried shrimp'
        },
        { name: 'Spaghetti & Meatballs',
        ingredients: 'spaghetti, Italian meatballs, red gravy'
        },
        { name: 'Bacon Mac & Cheese Pie',
        ingredients: 'bacon, alfredo, cheddar, and crispy bacon pieces'
        },
        { name: 'In-House Lasagna',
        ingredients: 'ricotta, mozzarella, marinara sauce, crumbled sausage, meatballs, red gravy, mozzarella cheese'
        },
        { name: 'Chicken Alfredo',
        ingredients: 'penne, alfredo, blackened chicken'
        }
    ]},
    {type: 'Soups',
    icon: 'assets/icons/icon-soup.svg',
    items: [
      { name: 'Third Street Sour',
        ingredients: 'Great Jones Straight Bourbon, pear puree, fresh lemon juice, simple syrup, dash cardamom bitters, dry red wine for float'
        },
        { name: 'Pradaise Coupe',
        ingredients: 'Great Jones Four Grain Bourbon, fresh lemon juice, demerara sugar syrup, drops Bourbon vanilla tincture,lemon zest'
        },
        { name: 'Empire State Cobbler',
        ingredients: 'Great Jones Straight Bourbon, apple cider, fresh lemon juice, strained, Orgeat syrup, dehydrated apple slice, nutmeg for grinding'
        },
        { name: 'Ice Pick',
        ingredients: 'Great Jones Four Grain Bourbon, dessert wine (such as Pindar Riesling), fresh lemon juice, large lemon peel'
        },
    ]},
    {type: 'Desserts',
    icon: 'assets/icons/icon-cake.svg',
    items: [
      { name: 'Bread Pudding Bites',
        ingredients: 'flash fried bread pudding bites, vanilla bean mousse, caramel, vanilla syrup'
        },
        { name: 'Root Beer Float',
        ingredients: 'root beer with a scoop of vanilla ice cream'
        },
        { name: 'Chocolate Chip Brownie',
        ingredients: 'chocolate chip brownie topped with vanilla ice cream, & drizzled with your choice of chocolate or caramel sauce',
        },
        { name: 'Cinnabites',
        ingredients: 'freshly baked cinnamon & sugar bites drizzled with vanilla sauce, & served with ice cream topped with caramel sauce'
        },
        { name: 'Gingerbread Cake',
        ingredients: 'orange Pastry Cream, espresso Buttercream, ginger Cookies'
        },
        { name: 'Black Forest',
        ingredients: 'whipped white chocolate ganache, brandied cherries, brandied cherry buttercream, chocolate trees'
        },
    ]},
    {type: 'Coctails',
    icon: 'assets/icons/icon-coctail.svg',
    items: [
      { name: 'Third Street Sour',
        ingredients: 'Great Jones Straight Bourbon, pear puree, fresh lemon juice, simple syrup, dash cardamom bitters, dry red wine for float'
        },
        { name: 'Pradaise Coupe',
        ingredients: 'Great Jones Four Grain Bourbon, fresh lemon juice, demerara sugar syrup, drops Bourbon vanilla tincture,lemon zest'
        },
        { name: 'Empire State Cobbler',
        ingredients: 'Great Jones Straight Bourbon, apple cider, fresh lemon juice, strained, Orgeat syrup, dehydrated apple slice, nutmeg for grinding'
        },
        { name: 'Ice Pick',
        ingredients: 'Great Jones Four Grain Bourbon, dessert wine (such as Pindar Riesling), fresh lemon juice, large lemon peel'
        },
    ]}
  ];

  getMenuItems() {
    return this.menuOptions;
  }
}
