import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleAlumnoSinPage } from './detalle-alumno-sin.page';

describe('DetalleAlumnoSinPage', () => {
  let component: DetalleAlumnoSinPage;
  let fixture: ComponentFixture<DetalleAlumnoSinPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAlumnoSinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleAlumnoSinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
