import messages from './messages';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  nome:{
    required: messages.required,
    minLength: {value: 2, message: messages.minLength + ' (mínimo de 2 caracteres)'},
    maxLength: {value: 50, message: messages.maxLength + ' (máximo de 50 caracteres)'},
  },
  cpf:{
    required: messages.required
  },
  matricula:{
    minLength: {value: 5, message: messages.minLength + ' (mínimo de 5 caracteres)'},
    maxLength: {value: 20, message: messages.maxLength + ' (máximo de 20 caracteres)'},
  },
  email:{
    maxLength: {value: 100, message: messages.maxLength + ' (máximo de 100 caracteres)'},
  },
  telefone:{
    minLength: {value: 14, message: messages.minLength + ' (mínimo de 14 caracteres)'},
    maxLength: {value: 20, message: messages.maxLength + ' (máximo de 15 caracteres)'},
  },
  cep:{
    maxLength: {value: 8, message: messages.maxLength + ' (máximo de 15 caracteres)'},
  },
  uf:{
    required: messages.required,
    maxLength: {value: 2, message: messages.maxLength + ' (máximo de 2 caracteres)'},
  },
  municipio:{
    required: messages.required
  },
  bairro:{
    required: messages.required
  },
  logradouro:{
    maxLength: {value: 100, message: messages.maxLength + ' (máximo de 100 caracteres)'},

  },
  complemento:{
    maxLength: {value: 100, message: messages.maxLength + ' (máximo de 100 caracteres)'},

  },
  numero:{
    maxLength: {value: 20, message: messages.maxLength + ' (máximo de 20 caracteres)'},
  },

}