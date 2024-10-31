export default {
  name: 'Calculadora',
  data() {
    return {
      numeroAnterior: null,
      valorCorrente: '',
      operador: null,
      operadorClicado: false,
    };
  },

  methods: {
    // Método responsável por limpar o display da 'Calculadora'
    limpar() {
      this.valorCorrente = '';
    },

    /*
    * Método responsável por colocar o sinal '-' ou '+' para realização de operações
    * matemáticas especiais.
    */
    sinal() {
      this.valorCorrente = this.valorCorrente.charAt(0) === '-'
        ? this.valorCorrente.slice(1)
        : `-${this.valorCorrente}`;
    },

    // Método responsável por realizar operações com 'porcentagem':
    porcentagem() {
      this.valorCorrente = `${parseFloat(this.valorCorrente) / 100}`;
    },

    // Método responsável por juntar os números no display da Calculadora:
    juntarNumeros(numero) {
      if (this.operadorClicado) {
        this.valorCorrente = '';
        this.operadorClicado = false;
      }
      this.valorCorrente = `${this.valorCorrente}${numero}`;
    },

    // Método responsável por adicionar 'ponto' no display da Calculadora:
    ponto() {
      if (this.valorCorrente.indexOf('.') === -1) {
        this.juntarNumeros('.');
      }
    },

    // Método responsável por 'resetar' o valor na Calculadora:
    setarValor() {
      this.numeroAnterior = this.valorCorrente;
      this.operadorClicado = true;
    },

    // Método responsável por realizar a operação da 'divisão' da Calculadora
    dividir() {
      this.operador = (a, b) => a / b;
      this.setarValor();
    },

    // Método responsável por realizar a operação da 'multiplicação' da Calculadora
    multiplicar() {
      this.operador = (a, b) => a * b;
      this.setarValor();
    },

    // Método responsável por realizar a operação da 'diminuir' da Calculadora
    diminuir() {
      this.operador = (a, b) => a - b;
      this.setarValor();
    },

    // Método responsável por realizar a operação da 'adição' da Calculadora
    somar() {
      this.operador = (a, b) => a + b;
      this.setarValor();
    },

    //Método responsável por realizar a potência ao quadrado
    quadrado() {
      this.valorCorrente = `${Math.pow(parseFloat(this.valorCorrente),2)}`;
    },

    //Método responsável por realizar a potência 
    potencia() {
      this.operador = (a, b) => Math.pow(a,b);
      this.setarValor();
    },

    //Método responsável por realizar a operação de log na base 10
    log() {
      this.valorCorrente = `${Math.log10(parseFloat(this.valorCorrente)).toFixed(8)}`;
    },

    //Método responsável por realizar a operação de log na base 10
    logx() {
      this.operador = (a, b) => (Math.log(a) / Math.log(b)).toFixed(8);
      this.setarValor();
    },

    //Método responsável por realizar a operação de raiz quadrada
    raiz() {
      this.valorCorrente = `${Math.sqrt(parseFloat(this.valorCorrente)).toFixed(8)}`;
    },

    //Método responsável por realizar a operação de uma raiz qualquer
    raizx() {
      this.operador = (a, b) => (Math.pow(b, 1/a)).toFixed(8);
      this.setarValor();
    },
    


    // Método responsável por apresentar o resultado das operações na Calculadora
    resultado() {
      this.valorCorrente = `${this.operador(
        parseFloat(this.numeroAnterior),
        parseFloat(this.valorCorrente),
      )}`;
      this.numeroAnterior = null;
    },
  },
};