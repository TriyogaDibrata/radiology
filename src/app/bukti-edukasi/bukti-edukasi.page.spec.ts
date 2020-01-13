import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuktiEdukasiPage } from './bukti-edukasi.page';

describe('BuktiEdukasiPage', () => {
  let component: BuktiEdukasiPage;
  let fixture: ComponentFixture<BuktiEdukasiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuktiEdukasiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuktiEdukasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
