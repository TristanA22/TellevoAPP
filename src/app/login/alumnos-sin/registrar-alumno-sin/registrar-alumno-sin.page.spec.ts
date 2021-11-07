import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistrarAlumnoSinPage } from './registrar-alumno-sin.page';

describe('RegistrarAlumnoSinPage', () => {
  let component: RegistrarAlumnoSinPage;
  let fixture: ComponentFixture<RegistrarAlumnoSinPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarAlumnoSinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarAlumnoSinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
