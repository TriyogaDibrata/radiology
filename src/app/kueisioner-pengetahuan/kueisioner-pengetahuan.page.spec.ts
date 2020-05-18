import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KueisionerPengetahuanPage } from './kueisioner-pengetahuan.page';

describe('KueisionerPengetahuanPage', () => {
  let component: KueisionerPengetahuanPage;
  let fixture: ComponentFixture<KueisionerPengetahuanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KueisionerPengetahuanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KueisionerPengetahuanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
