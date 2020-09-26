import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyaccountPagePage } from './myaccount-page.page';

describe('MyaccountPagePage', () => {
  let component: MyaccountPagePage;
  let fixture: ComponentFixture<MyaccountPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyaccountPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyaccountPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
