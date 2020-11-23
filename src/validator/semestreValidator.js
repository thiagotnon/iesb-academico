import messages from './messages';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  nome:{
    required: messages.required,
    minLength: {value: 2, message: messages.minLength + ' (mínimo de 2 caracteres)'},
    maxLength: {value: 5, message: messages.maxLength + ' (máximo de 50 caracteres)'},
  },
  inicio:{
    required: messages.required,
  },
  fim:{
    required: messages.required,
  },


}