
let Mvalidador = {
    handleSubmit:(event)=>{
        event.preventDefault();
        let enviar = true;

        let inputs = form.querySelectorAll('input');
        for(let i=0; i < inputs.length; i++){
            let input = inputs[i];
            let check = Mvalidador.checkInput(input);
            if(check !== true){
                enviar = false;
                // exibir erro
            } 
            console.log(check);

        }
        
        if(enviar){
            form.submit();

        }
    },
    checkInput:(input)=>{
        let rules = input.getAttribute('data-rules');
        if(rules !== null){
            rules =  rules.split('|');
            for(let k in rules){
                let rDetails = rules[k].split('=');
                switch(rDetails[0]){
                    case 'required':
                        if(input.value == ''){
                            return 'Campo não pode ser vazio'
                        }
                        break;
                        case 'min':

                        break;
                }
            }
        }
        return true;
    }

}
let form = document.querySelector('.validador');
form.addEventListener('submit',Mvalidador.handleSubmit);