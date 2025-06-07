import bcrypt from 'bcrypt';

export default class Senha {

    static criptografar(senha: string) {
        const senhaCriptografada = bcrypt.hashSync(senha, 10);
        return senhaCriptografada;
    }

    static comparar(senha: string, senhaCriptografada: string) {
        const senhaCorreta = bcrypt.compareSync(senha, senhaCriptografada);
        return senhaCorreta;
    }

}