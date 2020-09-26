import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NearestPagePage } from './nearest-page.page';

describe('NearestPagePage', () => {
  let component: NearestPagePage;
  let fixture: ComponentFixture<NearestPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearestPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NearestPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
