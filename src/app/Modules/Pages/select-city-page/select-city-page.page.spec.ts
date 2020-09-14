import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectCityPagePage } from './select-city-page.page';

describe('SelectCityPagePage', () => {
  let component: SelectCityPagePage;
  let fixture: ComponentFixture<SelectCityPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCityPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectCityPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
