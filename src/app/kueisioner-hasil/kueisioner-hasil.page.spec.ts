import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KueisionerHasilPage } from './kueisioner-hasil.page';

describe('KueisionerHasilPage', () => {
  let component: KueisionerHasilPage;
  let fixture: ComponentFixture<KueisionerHasilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KueisionerHasilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KueisionerHasilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
