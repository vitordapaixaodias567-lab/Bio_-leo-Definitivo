const url = 'http://localhost:3001/pessoas'
//Inicio Card de Login
async function Login(e) {
    if (e) e.preventDefault();

    const email = document.getElementById('email').value.trim().toLowerCase();
    const senha = document.getElementById('senha').value;

    try {
        const { data } = await axios.get(url, { params: { email } });

        const pessoa = data[0];
        if (pessoa && await Cripto.conferirSenha(senha, pessoa.senha)) {
            // cadastros antigos (senha e CPF em texto puro) passam a ser guardados criptografados
            const mudar = await Cripto.atualizarPessoa(pessoa);
            if (Object.keys(mudar).length) await axios.patch(`${url}/${pessoa.id}`, mudar);

            localStorage.setItem('usuarioId', pessoa.id);
            window.location.href = 'tela_inicial.html';
        } else {
            mostrarMensagem('E-mail ou senha incorretos, tente novamente', true);
        }
    } catch (error) {
        console.error(error);
        mostrarMensagem('Erro ao conectar com o servidor', true);
    }
}
//Fim do Card de login