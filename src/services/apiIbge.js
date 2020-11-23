import axios from 'axios';

const apoIbge = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/',
  headers: {
    'content-type' : 'application/json;charset=utf-8'
  }
});

export default apoIbge;