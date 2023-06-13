// TODAS AS QUESTÕES ESTÃO RESPONDIDAS NESTE MESMO ARQUIVO E SEPARADAS POR COMENTÁRIOS.

// PRIMEIRA QUESTÃO


// Função para estabelecer os números primos através de cálculos matemáticos

function numeroPrimo(number) {
    if (number <= 1) {
      return false;
    }
  
// Fórmula matemática para definir se o número é primo ou não
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }

// Função de listar os números e formar o loop para listagem
  
  function listarNumerosPrimos() {
    const primeNumbers = [];
  
    for (let i = 1; i <= 1000; i++) {
      if (numeroPrimo(i)) {
        primeNumbers.push(i);
      }
    }
  
    return primeNumbers;
  }
  
// Mensagem no console
  console.log("Números primos de 1 a 1000:");
  console.log(listarNumerosPrimos());


// Agora basta chamar a função "listarNumerosPrimos()"




// SEGUNDA QUESTÃO


// Criando a validação da senha (validarSenhaPrompt())

// ATENÇÃO AO CHAMAR A FUNÇÃO, O CORRETO É validarSenhaPrompt() , não consegui fazer de outro jeito.

function validarSenha(senha) {
// Verifica se a senha tem pelo menos 8 caracteres
    if (senha.length < 8) {
      return false;
    }
  
// Verifica se a senha contém pelo menos uma letra maiúscula
    if (!/[A-Z]/.test(senha)) {
      return false;
    }
  
// Verifica se a senha contém pelo menos uma letra minúscula
    if (!/[a-z]/.test(senha)) {
      return false;
    }
  
// Verifica se a senha contém pelo menos um número
    if (!/\d/.test(senha)) {
      return false;
    }
  
// Se todas as condições forem atendidas, a senha é válida
    return true;
  }
  
  function validarSenhaPrompt() {
    const senha = prompt("Digite a senha:");
  
    if (validarSenha(senha)) {
      console.log("A senha é válida.");
    } else {
      console.log("A senha não atende aos critérios.");
    }
  }
  
// Exemplo de uso da função para validar uma senha
  validarSenhaPrompt();
  
// Exemplo de uso da função para validar outra senha
  validarSenhaPrompt();

// Agora basta chamar "validarSenhaPrompt()"




// TERCEIRA QUESTÃO


//Criando a função de cálculo e criando o loop para calcular

function calcularFatorial(numero) {
    let fatorial = 1;
  
    for (let i = 1; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
// Exibindo os fatoriais de 1 a 10 no console log

  function exibirFatoriais() {
    for (let i = 1; i <= 10; i++) {
      const fatorial = calcularFatorial(i);
      console.log(`O fatorial de ${i} é ${fatorial}`);
    }
  }
  
// Exibe os fatoriais de 1 a 10
  exibirFatoriais();

// Basta chamar "exibirFatoriais()"





// QUARTA QUESTÃO


// Criando função de prompt para digitar o número

function isQuadradoPerfeito() {
    const numero = prompt("Digite um número:");
  
// Verificar se o número é inteiro
    if (!Number.isInteger(Number(numero))) {
      console.log("O valor digitado não é um número inteiro.");
      return;
    }
  
// Calcular a raiz quadrada do número
    const raiz = Math.sqrt(Number(numero));
  
// Verificar se a raiz quadrada é um número inteiro junto ao retorno no console caso não seja
    if (!Number.isInteger(raiz)) {
      console.log("O número não é um quadrado perfeito.");
      return;
    }
  
// Mensagem se o número é um quadrado perfeito
    console.log("O número é um quadrado perfeito.");
  }
  
// Chamar a função para verificar se um número é um quadrado perfeito
  isQuadradoPerfeito();

// Basta chamar "isQuadradoPerfeito()"

