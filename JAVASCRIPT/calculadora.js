function calculadora() {
    const operação = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));
    
    if (!operação || operação > 6) {
        alert('Erro - operação invalida!');
        calculadora();
    } else {
        
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`)
            novaOperacao();
        }

        function subtração() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`)
            novaOperacao();
        }

        function multiplicacao() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`)
            novaOperacao();
        }

        function divisaoReal() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`)
            novaOperacao();
        }

        function divisaoInteira() {
            resultado = n1 % n2;
            alert(`O resta da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
            novaOperacao(); 
        }

        function potenciacao() {
            resultado = n1 ** n2;
            alert(`${n1} elevado ${n2}ª é igual a ${resultado}`)
            novaOperacao();
        }

        function novaOperacao() {
            let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

            if (opcao == 1) {
                calculadora();
            } else if (opcao == 2) {
                alert('Até mais!')
            } else {
                alert('Digite uma opção valida"')
                novaOperacao();
            }
        }

        if (operação == 1) {
            soma();
        } else if (operação == 2) {
            subtração();
        } else if (operação == 3) {
            multiplicacao();
        } else if (operação == 4) {
            divisaoReal();
        } else if (operação == 5) {
            divisaoInteira();
        } else if (operação == 6) {
            potenciacao();
        }
    }
}    

calculadora();