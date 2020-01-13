import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailAlatRadiologiPage } from './detail-alat-radiologi.page';

describe('DetailAlatRadiologiPage', () => {
  let component: DetailAlatRadiologiPage;
  let fixture: ComponentFixture<DetailAlatRadiologiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAlatRadiologiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailAlatRadiologiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
