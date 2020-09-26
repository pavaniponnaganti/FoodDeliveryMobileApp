import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HowWorksPagePage } from './how-works-page.page';

describe('HowWorksPagePage', () => {
  let component: HowWorksPagePage;
  let fixture: ComponentFixture<HowWorksPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowWorksPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HowWorksPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
