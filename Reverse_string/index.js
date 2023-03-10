class reverseString{
    constructor(){
        //String a ser invertida
        this.name = ["L","u","i","g","i","_","B","a","t","i","s","t","a"]
        // Receberão o valor invertido e normal, respectivamente, da string
        this.reverse = ""
        this.normal = ""
        // Controladores do laço de inversão
        this.back = null // Variável que voltará no laço
        this.forward = null // Variável que avançará no laço
        this.inter = 0 // Várial intermediária na troca do espaço da string
    }
    main(){

        //Arrayn anted de ser invertido
        for(let i = 0; i < this.name.length; i++){
            this.normal = this.normal + this.name[i]
        }

        for(this.forward = 0, this.back = this.name.length - 1; this.forward < this.back; this.forward+= 1, this.back-= 1){
            // Transição de valores do arrya até inversão da string
            this.inter = this.name[this.forward]
            this.name[this.forward] = this.name[this.back]
            this.name[this.back] = this.inter
        }

        // Array depois da inverção
        for(let i = 0; i < this.name.length; i++){
            this.reverse = this.reverse + this.name[i]
        }

        //Mostrando resultado
        console.log(`String normal: ${this.normal}\nString inversa: ${this.reverse}`)

    }
}

let reveString = new reverseString()
    reveString.main()