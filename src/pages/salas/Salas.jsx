import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaUserPlus} from "react-icons/fa";

import PageTemplate from '../../components/PageTemplate';

import apiAcademico from "../../services/apiAcademico";



// eslint-disable-next-line import/no-anonymous-default-export
export default() => {
  const [salas, setSalas] = React.useState([]);

  React.useEffect(() => {
    apiAcademico.get('salas').then(results => {
      setSalas(results.data)
    })
  }, []);
  return(
    <>
      <PageTemplate title={'Salas'} subtitle={'Salas da instituição.'} url='./salas/novo' textButton='Adicionar nova sala' icon={<FaUserPlus />}>

        <Row>
        {salas.map(item => (
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