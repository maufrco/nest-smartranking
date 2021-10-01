import { AtualizarJogadorDto } from './dtos/atualizarJogador.dto';
import { CriarJogadorDto } from './dtos/criarJogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { JogadoresService } from './jogadores.service';
export declare class JogadoresController {
    private readonly jogadoresService;
    constructor(jogadoresService: JogadoresService);
    criarJogador(criarJogadorDto: CriarJogadorDto): Promise<Jogador>;
    atualizarJogador(atualizarJogadorDto: AtualizarJogadorDto, _id: string): Promise<void>;
    deletarJogador(_id: string): Promise<void>;
    consultarJogadores(): Promise<Jogador[]>;
    consultaJogador(_id: string): Promise<Jogador>;
}
