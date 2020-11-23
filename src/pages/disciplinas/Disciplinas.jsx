import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaUserPlus} from "react-icons/fa";

import PageTemplate from '../../components/PageTemplate';

import apiAcademico from "../../services/apiAcademico";



// eslint-disable-next-line import/no-anonymous-default-export
export default() => {
  const [disciplinas, setDisciplinas] = React.useState([]);

  React.useEffect(() => {
    apiAcademico.get('disciplinas').then(results => {
      setDisciplinas(results.data.data)
    })
  }, []);
  return(
    <>
      <PageTemplate title={'Disciplinas'} subtitle={'Disciplinas da instituição.'} url='./disciplina/nova' textButton='Adicionar novo disciplina' icon={<FaUserPlus />}>

        <Row>
        {disciplinas.map(item => (
           <Col md={3} className='mb-4' key={item.id}>
           <Card>
             <Card.Body>
              {item.nome}
             </Card.Body>
           </Card>
         </Col>

          ))}
         
        </Row>

      </PageTemplate>
    </>
  );
}