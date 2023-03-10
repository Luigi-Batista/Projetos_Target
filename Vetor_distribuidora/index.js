class VetDistribuidora{
    constructor(){
        this.dados = require("./dados.json") //Importação de dados
        this.MaFat = 0 // Valor maior valor de faturamento ocorrido em um mês
        this.MeFat = 0 // Valor menor valor de faturamento ocorrido em um mês
        this.day_ingnor = 0 // Quantidade de dias a serem ingnorados do mês
        this.day_MoMed = 0 // Contará quantos dias tiveram faturamentos maiores que a média
        this.MedMen = 0 // Valor média entre os faturamentos
        this.SMaFat = 0 //Variável intermediária para soma dos faturamentos diários
        this.QuantFat = 0 //Quantidade de valores a serem somados
    }
    main(){

        
        for(let i = 0; i < this.dados.length; i++){
            // Verificação de qual maior e menor faturamento
            if(this.dados[i].valor > this.MaFat){
                this.MaFat = this.dados[i].valor
            }else{
                this.MeFat = this.dados[i].valor
            }
            
            // Dias a serem ingnorados
            if(this.dados[i].valor == 0.0){
                this.day_ingnor++
            }
            
            //Somando os faturamentos diários
            this.SMaFat = this.SMaFat + this.dados[i].valor
            this.QuantFat++ //Atualizando o número de elementos a serem somados
        }
        //Verificando se realmente 'MaFat' é maior que 'MeFat'
        if(this.MaFat > this.MeFat){
            this.MaFat = this.MaFat
            this.MeFat = this.MeFat
        }else{
            this.MaFat = this.MeFat
            this.MeFat = this.MaFat
        }

        
        // Calculo da média
        this.MedMen = (this.SMaFat/(this.QuantFat - this.day_ingnor))
        //Verificando o número de dias do mês em que ofaturamento foi maior que a média
        for(let i = 0; i < this.dados.length; i++){
            // Verificação de qual maior e menor faturamento
            if(this.dados[i].valor > this.MedMen){
                this.day_MoMed++
            }
        }

        //Mostrando o resultado
        console.log(`O maior faturamento do mês: ${this.MaFat}\nO menor faturamento do Mês: ${this.MeFat}\nDias em que o faturamento foi maior que a média mensal: ${this.day_MoMed} dias`)

    }
}

// Execução da class
    let VetDist = new VetDistribuidora()
        VetDist.main()