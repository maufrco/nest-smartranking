import { CriarJogadorDto } from './dtos/criarJogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { Model } from 'mongoose';
import { AtualizarJogadorDto } from './dtos/atualizarJogador.dto';
export declare class JogadoresService {
    private readonly jogadorModel;
    constructor(jogadorModel: Model<Jogador>);
    private readonly logger;
    criarJogador(criarJogadorDto: CriarJogadorDto): Promise<Jogador>;
    atualizarJogador(_id: string, atualizarJogadorDto: AtualizarJogadorDto): Promise<Jogador>;
    deletarJogador(_id: string): Promise<any>;
    consultarTodosJogadores(): Promise<Jogador[]>;
    consultarJogadoresPorId(_id: string): Promise<Jogador>;
    private getJogadorPorId;
}
