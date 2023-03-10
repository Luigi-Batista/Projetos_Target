class FibonacciInpac{
    constructor(){
        this.numb = 400 //Valor a ser constado na sequência de Fibonacci e o valor que determinará quantos elementos da sequência de Fibonacci será mostrados

        this.seq = [] //Array que receberá a sequência de Fibonacci
        this.valid// Variável de validação
    }
    main(){
        //Criando calculo da sequência de Fibonacci
        let num = 1, num2= 0,num3 = 0 //variáveis intermediárias - para troca de valores

        for (let ind = 0; ind < this.numb; ind++) {

            num3 = num+num2 // Somando o antecessor com o sucessor
            num = num2 // Atribuindo o novo antecessor com o antigo sucessor 

            // Atribindo o novo sucessor com o número gerado da soma entre o sucessor e antecessor
            num2 = num3

            this.seq.push(num3) //Adicinando o elemento gerado ao array 'seq'

            
        }
        
        //Verificando se o número pré-determinado faz parte da sequência de Fibonacci
        if(this.seq.includes(this.numb)){
            this.valid = `O número ${this.numb} pertence a sequência`
        }else{
            this.valid = `O número ${this.numb} não pertence a sequência`
        }
        //Mostrando o resultado
        console.log("----------------------------")
        console.log(this.valid)
        console.log("----------------------------")
    }
}

//Execução da classe
let FiboIpanc = new FibonacciInpac()
    FiboIpanc.main()