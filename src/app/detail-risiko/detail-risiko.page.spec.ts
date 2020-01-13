import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailRisikoPage } from './detail-risiko.page';

describe('DetailRisikoPage', () => {
  let component: DetailRisikoPage;
  let fixture: ComponentFixture<DetailRisikoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailRisikoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailRisikoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
