import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaUserPlus} from "react-icons/fa";

import PageTemplate from '../../components/PageTemplate';

import apiAcademico from "../../services/apiAcademico";



// eslint-disable-next-line import/no-anonymous-default-export
export default() => {
  const [cursos, setCursos] = React.useState([]);

  React.useEffect(() => {
    apiAcademico.get('cursos').then(results => {
      setCursos(results.data)
    })
  }, []);
  return(
    <>
      <PageTemplate title={'Cursos'} subtitle={'Cursos da instituição.'} url='./cursos/novo' textButton='Adicionar novo curso' icon={<FaUserPlus />}>

        <Row>
        {cursos.map(item => (
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