import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  display = '';
  memoria = '';
  operacao = '';
  usouPonto = false;

  constructor() {}

  clicar(numero: string){
    this.display += numero;
  }

  escolherCalculo(operacao: string){
    this.memoria = this.display;
    this.operacao = operacao;
    this.display = '';
  }

  somar(){
    const n1 = parseFloat(this.memoria);
    const n2 = parseFloat(this.display);
    const resp = n1+n2;

    this.display = resp.toString();
  }

  subtrair(){
    const n1 = parseFloat(this.memoria);
    const n2 = parseFloat(this.display);
    const resp = n1 - n2;
    
    this.display = resp.toString();
  }

  podeCalcular(): boolean {
    return (this.memoria !== '' && this.display !== '');
  }

  efetuarCalculo(){
    if(this.podeCalcular()){
      const dispTmp = this.display;

      switch(this.operacao){
      case '+': this.somar();break;
      case '-': this.subtrair(); break;
      case '*': this.multiplicar(); break;
      case '/': this.dividir(); break;
    }
    
    this.memoria = dispTmp;
    }else{
      console.log('Não há nenhum número da memória');
    }
  }

  usarPonto(){
    if(this.display == ''){
      this.display = '0';
    }

    if(!this.usouPonto){
      this.display += '.';
      this.usouPonto = true;
    }
  }

  limpar(){
    this.memoria ='';
    this.display ='';
    this.usouPonto = false;
  }

  multiplicar(){
    const n1 = parseFloat(this.memoria);
    const n2 = parseFloat(this.display);
    const resp = n1 * n2;

    this.display = resp.toString();
  }

  dividir(){
    const n1 = parseFloat(this.memoria);
    const n2 = parseFloat(this.display);
    
    if (n2 !== 0){
      const resp = n1/n2;

      this.display = resp.toString();
    }else{
      console.log('Não é possivel realizar divisões por zero');
    }
  }
}
