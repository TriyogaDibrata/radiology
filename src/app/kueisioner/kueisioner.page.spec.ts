import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KueisionerPage } from './kueisioner.page';

describe('KueisionerPage', () => {
  let component: KueisionerPage;
  let fixture: ComponentFixture<KueisionerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KueisionerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KueisionerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
