import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KueisionerSikapPage } from './kueisioner-sikap.page';

describe('KueisionerSikapPage', () => {
  let component: KueisionerSikapPage;
  let fixture: ComponentFixture<KueisionerSikapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KueisionerSikapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KueisionerSikapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
