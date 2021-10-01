import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AtualizarJogadorDto } from './dtos/atualizarJogador.dto';
import { CriarJogadorDto } from './dtos/criarJogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { JogadoresService } from './jogadores.service';
import { JogadoresValidaParamsPipe } from './pipes/jogadoresValidaParams.pipe';

@Controller('api/v1/jogadores')
export class JogadoresController {
  constructor(private readonly jogadoresService: JogadoresService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async criarJogador(
    @Body() criarJogadorDto: CriarJogadorDto,
  ): Promise<Jogador> {
    return await this.jogadoresService.criarJogador(criarJogadorDto);
  }

  @Put('/:_id')
  async atualizarJogador(
    @Body() atualizarJogadorDto: AtualizarJogadorDto,
    @Param('_id', JogadoresValidaParamsPipe) _id: string,
  ): Promise<void> {
    await this.jogadoresService.atualizarJogador(_id, atualizarJogadorDto);
  }

  @Delete('/:_id')
  async deletarJogador(@Param('_id', JogadoresValidaParamsPipe) _id: string) {
    await this.jogadoresService.deletarJogador(_id);
  }

  @Get()
  async consultarJogadores(): Promise<Jogador[]> {
    return this.jogadoresService.consultarTodosJogadores();
  }

  //  @Get()
  //  async consultaJogador(
  //    @Query('email', JogadoresValidaParamsPipe) email: string,
  //  ): Promise<Jogador> {
  //    return this.jogadoresService.consultarJogadoresPeloEmail(email);
  //  }

  @Get('/:_id')
  async consultaJogador(
    @Param('_id', JogadoresValidaParamsPipe) _id: string,
  ): Promise<Jogador> {
    return this.jogadoresService.consultarJogadoresPorId(_id);
  }
}
