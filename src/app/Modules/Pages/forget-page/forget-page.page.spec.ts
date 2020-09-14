import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForgetPagePage } from './forget-page.page';

describe('ForgetPagePage', () => {
  let component: ForgetPagePage;
  let fixture: ComponentFixture<ForgetPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForgetPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
