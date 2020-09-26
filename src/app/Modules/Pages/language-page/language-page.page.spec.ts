import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LanguagePagePage } from './language-page.page';

describe('LanguagePagePage', () => {
  let component: LanguagePagePage;
  let fixture: ComponentFixture<LanguagePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
