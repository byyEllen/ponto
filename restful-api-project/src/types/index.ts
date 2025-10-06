export interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
    departamentoId: number;
}

export interface Ponto {
    id: number;
    usuarioId: number;
    data: Date;
    horaEntrada: Date;
    horaSaida: Date;
}

export interface Departamento {
    id: number;
    nome: string;
    descricao: string;
}