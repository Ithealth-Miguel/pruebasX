import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pruebasUnitarias'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pruebasUnitarias');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('pruebasUnitarias app is running!');
  });
});


// describe('Probando funciones', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule,
//         ReactiveFormsModule
//       ],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   });
//   it('si sumas 2 mas 2 debe ser igual 4', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.sumarNumeros(2,2)).toEqual(4);
//   });


//   it('si realiza una suma como primer parametro 1', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.calculadora(1,2,2)).toEqual(4)
//   });
//   it('si realiza una resta como primer parametro 2', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.calculadora(2,2,2)).toEqual(0)
//   });
//   it('si realiza una multiplicacion como primer parametro 3', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.calculadora(3,2,2)).toEqual(4)
//   });
//   it('si realiza una divicion como primer parametro 4', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.calculadora(4,2,2)).toEqual(1)
//   });
//   it('si envias un numero no parametrizado', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.calculadora(5,2,2)).toEqual(0)
//   });
// });
