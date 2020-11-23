import messages from './messages';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  curso:{
    required: messages.required,
    minLength: {value: 2, message: messages.minLength + ' (mínimo de 2 caracteres)'},
    maxLength: {value: 5, message: messages.maxLength + ' (máximo de 5 caracteres)'},
  },
  duracao:{
    required: messages.required,
  },
  modalidades:{
    required: messages.required,
    maxLength: {value: 1, message: messages.maxLength + ' (máximo de 1 caracteres)'},

  },


}