export class TipoListino {
  id: number;
  tipoListino: string;
  descrizione: string;
  data_creazione: string;

  constructor() {
    this.id = 0;
    this.tipoListino = '';
    this.descrizione = '';
    this.data_creazione = '';
  }
}
