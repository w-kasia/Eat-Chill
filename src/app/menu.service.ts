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
        ingredients: 'marinara, mozzarella, pepperoni, canadian bacon, salami, bacon'
        },
        { name: 'Vin Monster',
        ingredients: 'marinara, mozzarella, pepperoni, crumbled Italian sausage, mushrooms, kalamata olives'
        },
        { name: 'Angry Pig',
        ingredients: 'spicy bbq sauce, mozzarella, crumbled italian sausage, bacon, jalapeños, cheddar'
        },
        { name: 'The Popeye',
        ingredients: 'oil base, mozzarella, fresh spinach, roasted garlic, feta, roasted red peppers, red onions'
        },
        { name: 'Spicy Diavola',
        ingredients: 'tomato, mozzarella, ‘nduja, calabrian salami, chilli'
        },
        { name: 'Jalapeno Popper',
        ingredients: 'alfredo sauce, blackened chicken, bacon, cheddar, and jalapenos'
        },
        { name: 'Cinque Formaggi',
        ingredients: 'roast onion cream, taleggio, fontina, mozzarella, gorgonzola, parmesan'
        },
        { name: 'The Krewe',
        ingredients: 'marinara, mozzarella, pepperoni, bacon, cheddar, feta, parmesan'
        },
        { name: 'Napoletana',
        ingredients: 'tomato, mozzarella, olives, anchovies, parsley, chilli, crispy capers'
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
        ingredients: 'plant based patty, lettuce, tomato, onions, pickles, vegan aioli'
        },
        { name: 'Smoke Stack',
        ingredients: 'angus beef stacked with pulled pork, mac & cheese, fried egg, slaw, mayo'
        },
        { name: 'Steak Cheeseburger',
        ingredients: 'melted mature cheddar or roquefort cheese, mustard mayo, beef tomato, red onion, rocket'
        },
        { name: 'Chicken Malibu',
        ingredients: 'chicken breast, melted mature Cheddar cheese, smoked bacon, avocado, mustard mayo, baby gem, beef tomato, red onion'
        },
        { name: 'Secret Garden VG',
        ingredients: 'panko crusted portobello mushroom, spicy peanut sauce, crisp cavolo nero, avocado, sesame seeds, seeded brioche bun'
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
        },
        { name: 'Creamy Carbonara',
        ingredients: 'eggless spaghettoni carbonara, egg yolk, guanciale, parmesan'
        },
        { name: 'Crab Linguine',
        ingredients: 'tagliolini, brown crab meat sauce, samphire'
        },
        { name: 'Cavolo Nero Rigatoni',
        ingredients: 'eggless mezzi rigatoni, cavolo Nero pesto, roasted chestnuts'
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
        { name: 'Witches Brew',
        ingredients: 'chickpeas, mushrooms, peppers, asparagus, tomatoes, pesto, veg stock, onions, celery'
        },
        { name: 'White Bay Chowder',
        ingredients: 'creamy, savory seafood stew with bacon. '
        },
        { name: 'Sweet Potato Bisque',
        ingredients: 'roasted red peppers, stewed sweet potatoes, tomatoes, coconut milk, veg stock'
        },
        { name: 'Spring Asparagus',
        ingredients: 'asparagus, chickpeas, parsley, garlic & lemon in a vegan broth'
        },
        { name: 'Roasted Fennel & White Bean',
        ingredients: 'onions, fennel, white beans, celery, tomato, veg stock'
        }
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
        ingredients: 'orange Pastry Cream, espresso Buttercream, ginger cookies'
        },
        { name: 'Black Forest',
        ingredients: 'whipped white chocolate ganache, brandied cherries, brandied cherry buttercream, chocolate trees'
        },
        { name: 'Harvest Bread Pudding',
        ingredients: 'apples, cinnamon, brown sugar and walnuts, topped with vanilla ice cream and caramel sauce'
        },
        { name: 'Sticky Toffee pudding',
        ingredients: 'rich salted butterscotch sauce, vanilla bean ice cream'
        },
        { name: 'Winter Berry Pavlova',
        ingredients: 'crunchy meringue nest filled with winter berries, fresh whipped cream, raspberry coulis'
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
        { name: 'Grapefruit Basil Refresher',
        ingredients: 'Wheatley Vodka, St. Germain, fresh lemon juice, Root23 Grapefruit Bail Syrup and grapefruit juice'
        },
        { name: 'Rumaretto Sour',
        ingredients: 'Bumbu Rum, amaretto, fresh lemon juice and aquafaba served with luxardo cherries'
        },
        { name: 'Dublin Paloma',
        ingredients: 'Espolon Silver Tequila, fresh lime, grapefruit juice and soda served with the signature Dobel black-salt rim'
        },
        { name: 'Elit Mule',
        ingredients: 'Stoli Elit Vodka, fresh lime juice and Crabbies Original Alcoholic Ginger Beer'
        },
        { name: 'Espresso Martini',
        ingredients: 'Absolut Vanilla, Kahlua and locally roasted Jennings Java Golden Espresso garnished with fresh espresso beans'
        },
    ]}
  ];

  getMenuItems() {
    return this.menuOptions;
  }
}
