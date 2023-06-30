export class Utente {
  id: number;
  nome: string;
  cognome: string;
  cf: string;
  dataNascita: Date;
  email: string;
  telefono: string;
  codiceUtente: string;
  //idAccount:number;

  constructor() {
    this.id = 0;
    this.nome = '';
    this.cognome = '';
    this.cf = '';
    this.dataNascita = new Date();
    this.email = '';
    this.telefono = '';
    this.codiceUtente = '';
    /*this.username = '';
    this.password = '';*/
    //this.idAccount = 0;
  }
}
