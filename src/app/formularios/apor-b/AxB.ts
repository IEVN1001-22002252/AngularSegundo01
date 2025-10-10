export class Calcular{
  numA:number=0;
  numB:number=0;
  contador: number=0;
  resultado:number=0;
  operacion:string='';

  sumar(){
    for (let i = 0; i < this.numA; i++) {
            this.operacion += this.numB;
            if (i < this.numA - 1) {
                this.operacion += " + ";
            }
        }
    while (this.contador < this.numA) {
      this.resultado=this.resultado + this.numB;
      this.contador++;
    }
    this.operacion += ` = ${this.resultado}`;
  }
}
