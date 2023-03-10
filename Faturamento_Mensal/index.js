class FaturamentoMensa{
    constructor(){
        this.estNome = ["SP","RJ", "MG","ES"] // Nomes dos estados
        this.VMen = [67836.43, 36678.66, 29229.88, 27165.48,19849.53] // Valores correspondentes a cada estado 
        this.SMen = 0 // Variável a qual recebera a soma dos valores de cada estado
        this.PerMen = [] // Percentual de participação de participação de cada estado no valor total mensal da empresa
    }
    main(){

        for(let i = 0; i < this.VMen.length; i++){

            // Somando o vetor 'VMen' para achar o 100% do
            // valor total mensal
            this.SMen = this.SMen + this.VMen[i] 

        }
            // Arredondando o valor total
            this.SMen = parseFloat(this.SMen.toFixed(2))

        for(let i = 0; i < this.VMen.length; i++){
            // Calculando o percentual de representação de cada estado emrelação ao valor total mensal da distruibidora
            this.PerMen[i] = parseFloat(((this.VMen[i]*100)/this.SMen).toFixed(2)) 

        }
        
        //Mostrando o resultado
        console.log(`Emrelação ao total de vendas - ${this.SMen.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL'})}:\n`)
        for(let i = 0; i < this.estNome.length; i++){

            console.log(`${this.estNome[i]} representa ${this.PerMen[i]}% - ${this.VMen[i].toLocaleString("pt-BR", {style:'currency', currency:'BRL'})}\n`)

        }

    }
}

let fatuMen = new FaturamentoMensa()
    fatuMen.main()