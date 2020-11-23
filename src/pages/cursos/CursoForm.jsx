import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import PageTemplate from "../../components/PageTemplate";
import validator from "../../validator/cursoValidator";
import Input from "../../components/forms/Input";
import Select from '../../components/forms/Select';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {


  const { register, handleSubmit, errors } = useForm();
  const reference =  { register, validator, errors };
  const onSubmit = (data) => console.log(data);

  const modalidades = [
    {id: 'E', modalidade: 'EaD'},
    {id: 'P', modalidade: 'Presencial'},
    {id: 'S', modalidade: 'Semi-Presencial'},
  ]
  

  return (
    <>
      <PageTemplate
        title={"Novo curso"}
        subtitle={"Formulário de cadastro de cursos."}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={6} className='offset-md-3 mb-5 mb-md-0'>
              <Card>
                <Card.Body>
                  <Card.Title className="d-flex align-items-center">
                    <FaUserAlt className="mr-2 text-secondary" /> Novo curso
                  </Card.Title>
                  <hr />
                  <Form.Row>
                    <Input
                      name="curso"
                      label="Curso"
                      reference={reference}
                      size={12}
                    />

                    <Input
                      name="duracao"
                      label="Duração"
                      reference={reference}
                      size={12}
                    />  
                    <Select
                      name="modalidade"
                      label="Modalidade"
                      reference={reference}
                      size={12}
                      data={modalidades}
                      value='id'
                    />  
                  </Form.Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <Link to="/cursos" className="btn btn-secondary mr-3">
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
