import Senha from "../shared/Senha";
import Usuario from "./usuario";

export default class RepositorioUsuario {
  usuarios: Usuario[] = [
    new Usuario("pedro@exemplo.com", "senha123"),
    new Usuario("maria@exemplo.com", "senha456"),
    new Usuario("joao@exemplo.com", "senha789"),
  ];

  encontrarIndice(email: string) {
    const i = this.usuarios.findIndex((usuario) => usuario.email === email);
    return i;
  }

  usuarioExiste(email: string) {
    const existe = this.encontrarIndice(email) !== -1;
    return existe;
  }

  loginCorreto(email: string, senha: string) {
    const i = this.encontrarIndice(email);
    if (i !== -1) {
      const senhaCorreta = Senha.comparar(senha, this.usuarios[i].senha);
      return senhaCorreta;
    }
    return false;
  }
}
