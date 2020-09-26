import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyordersPagePage } from './myorders-page.page';

describe('MyordersPagePage', () => {
  let component: MyordersPagePage;
  let fixture: ComponentFixture<MyordersPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyordersPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyordersPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
