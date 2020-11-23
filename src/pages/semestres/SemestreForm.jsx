import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaUserAlt, FaMapMarkerAlt } from "react-icons/fa";
import PageTemplate from "../../components/PageTemplate";
import validator from "../../validator/salaValidator";
import Input from "../../components/forms/Input";
import Select from '../../components/forms/Select';
import { mask, unMask } from 'remask';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {


  const { register, handleSubmit, errors } = useForm();
  const reference =  { register, validator, errors };
  const onSubmit = (data) => console.log(data);

  const tipo = [
    {id: 'S', tipo: 'Sala de aula'},
    {id: 'P', tipo: 'Sala dos professores'},
    {id: 'L', tipo: 'Laboratório'},
    {id: 'A', tipo: 'Auditório'},
  ]
  

  return (
    <>
      <PageTemplate
        title={"Novo Semestre"}
        subtitle={"Formulário de cadastro de salas."}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={6} className='offset-md-3 mb-5 mb-md-0'>
              <Card>
                <Card.Body>
                  <Card.Title className="d-flex align-items-center">
                    <FaUserAlt className="mr-2 text-secondary" /> Novo sala
                  </Card.Title>
                  <hr />
                  <Form.Row>
                    <Input
                      name="nome"
                      label="Sala"
                      reference={reference}
                      size={12}
                    />

                    <Input
                      name="capacidade"
                      label="Capacidade"
                      reference={reference}
                      size={12}
                    />  
                    <Select
                      name="tipo"
                      label="Tipo"
                      reference={reference}
                      size={12}
                      data={tipo}
                      key='id' 
                      value='tipo' 
                    />  
                  </Form.Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <Link to="/salas" className="btn btn-secondary mr-3">
              Voltar
            </Link>
            <Button variant="primary" type="submit">
              Cadastrar
            </Button>
          </div>
        </Form>
      </PageTemplate>
    </>
  );
};
