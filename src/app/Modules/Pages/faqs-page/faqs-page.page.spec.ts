import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FaqsPagePage } from './faqs-page.page';

describe('FaqsPagePage', () => {
  let component: FaqsPagePage;
  let fixture: ComponentFixture<FaqsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqsPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaqsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
