
let Mvalidador = {
    handleSubmit:(event)=>{
        event.preventDefault();
        let enviar = true;

        let inputs = form.querySelectorAll('input');

        Mvalidador.clearErrors();

        for(let i=0; i < inputs.length; i++){
            let input = inputs[i];
            let check = Mvalidador.checkInput(input);
            if(check !== true){
                enviar = false;
                // exibir erro
                Mvalidador.showError(input,check);

            } 
            
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
    },
    showError:(input,error)=>{
        input.style.borderColor='red';

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;
        input.parentElement.insertBefore(errorElement,input.ElementSibling);
 

    },

    clearErrors:()=>{
        let inputs = form.querySelectorAll('input');
        for(let i= 0; i < inputs.length;i++){
            inputs[i].style = '';
        }

        let errorElements = document.querySelectorAll('.error');
        for(let i=0; i < errorElements.length; i++){
            errorElements[i].remove()
        }
    }

};
let form = document.querySelector('.validador');
form.addEventListener('submit',Mvalidador.handleSubmit);