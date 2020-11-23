import React from 'react';
import { Button,Table } from 'react-bootstrap';
import { FaUserPlus} from "react-icons/fa";

import PageTemplate from '../../components/PageTemplate';

import apiAcademico from "../../services/apiAcademico";



// eslint-disable-next-line import/no-anonymous-default-export
export default() => {
  const [professores, setProfessores] = React.useState([]);

  React.useEffect(() => {
    apiAcademico.get('professores').then(results => {
      setProfessores(results.data)
    })
  }, []);
  return(
    <>
      <PageTemplate title={'Professores'} subtitle={'Professors matriculados na instituição.'} url='./professor/novo' textButton='Adicionar novo professor' icon={<FaUserPlus />}>
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
          {professores.map(item => (
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