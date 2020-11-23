import React from 'react';
import { Button,Table } from 'react-bootstrap';
import { FaUserPlus} from "react-icons/fa";

import PageTemplate from '../../components/PageTemplate';

import apiAcademico from "../../services/apiAcademico";



// eslint-disable-next-line import/no-anonymous-default-export
export default() => {
  const [alunos, setAlunos] = React.useState([]);

  React.useEffect(() => {
    apiAcademico.get('alunos').then(results => {
      setAlunos(results.data.data)
    })
  }, []);
  return(
    <>
      <PageTemplate title={'Alunos'} subtitle={'Alunos matriculados na instituição.'} url='./aluno/novo' textButton='Adicionar novo aluno' icon={<FaUserPlus />}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Matrícula</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map(item => (
            <tr key={item.matricula}>
            <td>{item.nome}</td>
            <td>{item.matricula}</td>
            <td>{item.telefone}</td>
            <td>
              <Button variant="secondary">Editar</Button>{' '}
              <Button variant="secondary">Excluir</Button>
            </td>
          </tr>
          ))}
          
        </tbody>
      </Table>
      </PageTemplate>
    </>
  );
}