import axios from 'axios';

const apiAcademico = axios.create({
  baseURL: 'http://127.0.0.1:3333/api/v1',
  headers: {
    'content-type' : 'application/json;charset=utf-8'
  }
});

export default apiAcademico;