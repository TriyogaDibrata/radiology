import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RisikoRadiasiPage } from './risiko-radiasi.page';

describe('RisikoRadiasiPage', () => {
  let component: RisikoRadiasiPage;
  let fixture: ComponentFixture<RisikoRadiasiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RisikoRadiasiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RisikoRadiasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
