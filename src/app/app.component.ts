import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

interface articulos{
  productName:string
  value:number
  cant:number
  producType:any
  description:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'pruebasUnitarias';

  productos:articulos[]=[];
  btnCalcular:boolean= false

  myForm:FormGroup = this.fb.group({
      productName:['',[Validators.required]],
      value:['',[Validators.required]],
      cant:['',[Validators.required]],
      producType:['',[Validators.required]],
      description:['',[Validators.required]],
  })

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    if(localStorage.getItem('articulos') ){
      this.productos = JSON.parse( localStorage.getItem('articulos') || '')
    }
  }


  agregarProducto(){
    if(this.myForm.invalid){
      Swal.fire('Error','Rellene todos los campos !','error');
      return
    }
    console.log(this.myForm.value);
    this.productos.push(this.myForm.value);
    localStorage.setItem('articulos',JSON.stringify(this.productos));
    this.myForm.reset();
  }

  abrirAletar(description:string){
    Swal.fire('Descripción',description,'info')
  }
  
  calcularDatos(){
    if(this.productos.length === 0){
      Swal.fire('Error','No hay datos !','error');
      return;
    }
    this.btnCalcular = true;
  }
  limpiarDatos(){
    this.btnCalcular = false;
    localStorage.clear()
    this.productos =[];
  }

  regresar(){
    this.btnCalcular = false;
  }



  // sumarNumeros(num1:number,num2:number):number{
  //   let result= num1+num2;
  //   return result
  // }

  // calculadora(operacion:number,num1:number,num2:number):number{
  //   if(operacion === 1){
  //     return num1+num2
  //   }
  //   if(operacion === 2){
  //     return num1-num2
  //   }
  //   if(operacion === 3){
  //     return num1*num2
  //   }
  //   if(operacion === 4){
  //     return num1/num2
  //   }
  //   return 0
  // }
}
