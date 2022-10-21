

// let formulario = document.querySelector('.formCadastro')

// formulario.onsubmit = function(evento){
//     evento.preventDefault()

//     let inputNome = document.forms['formCadastro']
//     console.log (inputNome)
//     if (!inputNome.value){
//         inputNome.classList.add('inputError')
        
//         let span = inputNome.nextSibling.nextSibling
//         span.innerText = 'Digite o nome corretamente'
//     }

const form = document.querySelector('#register')

form.addEventListener('submit', event => {
	event.preventDefault()

	/*
			Aponte para o id do formulario e depois para
			o id do input dentro do formulário

			idFormulario.idInputDentroFormulario
	*/
	console.log(form.username) // Pega referência completa do elemento
	console.log(form.username.value) // Pega somente o valor

	/*
			Outra forma e apontar para o name do input

			idFormulario.nameInputDentroFormulario
	*/

	console.log(form.lastname.value)

	/*
			Outra forma e que é muito usada na bibliotéca React.
			lastname pode ser id ou name
	*/
	// console.log(event.target.lastname.value)
})
