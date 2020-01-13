import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlatRadiologiPage } from './alat-radiologi.page';

describe('AlatRadiologiPage', () => {
  let component: AlatRadiologiPage;
  let fixture: ComponentFixture<AlatRadiologiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlatRadiologiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlatRadiologiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
