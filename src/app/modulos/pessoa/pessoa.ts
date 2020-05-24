import { Telefone } from "./telefone";

export interface Pessoa {
    id:number;
    nome: string;
    documento:string;
    dataNascimento: Date;
    dataCadastro: Date;
    tipoPessoa: string;
    nomeMae: string;
    nomePai: string;
    login: string;
    telefones: Array<Telefone>;
   
}
