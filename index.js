var projeto = (function () {
    var configs = {
        urls: {
            buscar: '',
            mostrarViewCadastrar: '',
            cadastrar: '',
            mostrarViewEditar: ''
        }
    };

    var init = function ($configs) {
        configs = $configs;
    }

    var acessarDados = function() {
        $('.departamento').hide();
        $('.preco').hide();
        $('.informacoes-dados-pessoais').show("slow");

        $('.button-dados-pessoais').addClass("botoes-cadastro-sem-borda");
        $('.button-departamento').removeClass("botoes-cadastro-sem-borda");
        $('.button-preco').removeClass("botoes-cadastro-sem-borda");
    };

    var acessarOpcao = function() {
        $('.informacoes-dados-pessoais').hide();
        $('.preco').hide();
        $('.departamento').show("slow");
        
        $('.button-dados-pessoais').removeClass("botoes-cadastro-sem-borda");
        $('.button-departamento').addClass("botoes-cadastro-sem-borda");
        $('.button-preco').removeClass("botoes-cadastro-sem-borda");
    };

    var acessarPreco = function() {
        $('.informacoes-dados-pessoais').hide();
        $('.departamento').hide();
        $('.preco').show("slow");

        $('.button-dados-pessoais').removeClass("botoes-cadastro-sem-borda");
        $('.button-departamento').removeClass("botoes-cadastro-sem-borda");
        $('.button-preco').addClass("botoes-cadastro-sem-borda");
    };

    var setaRetornoCliente = function() {
        $('.container-cadastrar-projeto').hide();
        $('.container-resultado-busca').hide();
        $('.div-botao-cadastrar-projeto').show("slow");
        $('.container-buscar-projeto').show("slow");
    };

    var setaRetornoDados = function() {
        acessarDados();
    };

    var setaRetornoOpcao = function() {
        acessarOpcao();
    };

    var limparFormularioDadosPessoais = function() {
        $("#cadastro-cnpj").val("");
        $("#cadastro-razao-social").val("");
        $("#cadastro-nome-fantasia").val("");
        $("#cadastro-inscricao-estadual").val("");
        $("#cadastro-inscricao-municipal").val("");
        $("#cadastro-cadastro-cep").val("");
        $("#cadastro-rua").val("");
        $("#cadastro-bairro").val("");
        $("#cadastro-cidade").val("");
        $("#cadastro-uf").val("");
    };

    var limparFormularioDepartamento = function(){
        $("#cadastro-nome-do-departamento").val("");
        $("#cadastro-nome-do-contato").val("");
        $("#cadastro-e-mail").val("");
        $("#cadastro-discord").val("");
        $("#cadastro-skype").val("");
        $("#cadastro-ddd-celular").val("");
        $("#cadastro-numero-telefone-celular").val("");
        $("#cadastro-whatsapp").val("");
        $("#cadastro-ddd-fixo").val("");
        $("#cadastro-numero-telefone-fixo").val("");
        $("#cadastro-ramal").val("");
    };

    var limparFormularioPreco = function(){
        $("#cadastro-tipo-de-projeto").val("");
        $("#cadastro-valor-da-hora").val("");
        $("#calendario").val("");
    };

    return {
        init: init,
        acessarDados: acessarDados,
        acessarOpcao: acessarOpcao,
        acessarPreco: acessarPreco,
        setaRetornoCliente: setaRetornoCliente,
        setaRetornoDados: setaRetornoDados,
        setaRetornoOpcao: setaRetornoOpcao,
        limparFormularioDadosPessoais: limparFormularioDadosPessoais,
        limparFormularioDepartamento: limparFormularioDepartamento,
        limparFormularioPreco: limparFormularioPreco
    };
})()
