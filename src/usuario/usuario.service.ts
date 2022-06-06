import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  private usuarios: Array<Usuario> = [
    {
      id: 1,
      nomeCompleto: 'Alfredo Completo',
      nomeDeUsuario: 'Alfredo',
      dataDeEntrada: new Date(),
      email: 'alfredocompleto@gmail.com',
      senha: '123566',
    },
  ];

  public cria(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);

    return usuario;
  }

  public buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
    const encontrado = this.usuarios.find(
      (usuario) => usuario.nomeDeUsuario == nomeDeUsuario,
    );

    return encontrado;
  }
}
