import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PdfBuktiPage } from './pdf-bukti.page';

describe('PdfBuktiPage', () => {
  let component: PdfBuktiPage;
  let fixture: ComponentFixture<PdfBuktiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfBuktiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PdfBuktiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
