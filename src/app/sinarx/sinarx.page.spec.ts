import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinarxPage } from './sinarx.page';

describe('SinarxPage', () => {
  let component: SinarxPage;
  let fixture: ComponentFixture<SinarxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinarxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinarxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
