import { TestBed } from '@angular/core/testing';
import { MenuService } from './menu.service';

describe('MenuService', () => {
  let menuService: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    menuService = TestBed.inject(MenuService);
    providers: [MenuService]
  });

  beforeEach(() => {
    menuService = new MenuService()
  });

  it('should create the menu service', () => {
    expect(menuService).toBeTruthy();
  });

  it('should return the menu items', () => {
    const menuItems = menuService.getMenuItems();

    expect(menuItems.length).toBeGreaterThan(0);
  })
});
