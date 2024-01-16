import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { routingComponents } from '../app-routing.module';
import { MenuService } from '../menu.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let menuService: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent, routingComponents, NavbarComponent, FooterComponent],
      providers: [MenuService]
    });
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    menuService = new MenuService();
    component = new MenuComponent(menuService);
  })

  it('should create the menu component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize menuOptions and activeOptionIndex', () => {
    expect(component.menuOptions).toEqual(menuService.getMenuItems());
    expect(component.activeOptionIndex).toBe(0);
  });

  it('should update activeOptionIndex when toggleSection method is called', () => {
    const selectedIndex = 2;
    component.toggleSection(selectedIndex);

    expect(component.activeOptionIndex).toBe(selectedIndex);
  });
});
