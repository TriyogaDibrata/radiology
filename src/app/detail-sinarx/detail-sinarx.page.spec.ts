import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailSinarxPage } from './detail-sinarx.page';

describe('DetailSinarxPage', () => {
  let component: DetailSinarxPage;
  let fixture: ComponentFixture<DetailSinarxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSinarxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailSinarxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
