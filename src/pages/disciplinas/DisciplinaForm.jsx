import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import PageTemplate from "../../components/PageTemplate";
import validator from "../../validator/semestreValidator";
import Input from "../../components/forms/Input";


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  const { register, handleSubmit, errors } = useForm();
  const reference =  { register, validator, errors };
  const onSubmit = (data) => console.log(data);


  return (
    <>
      <PageTemplate
        title={"Novo semestre"}
        subtitle={"Formulário de cadastro de semestres."}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={6} className='offset-md-3 mb-5 mb-md-0'>
              <Card>
                <Card.Body>
                  <Card.Title className="d-flex align-items-center">
                    <FaUserAlt className="mr-2 text-secondary" /> Novo semestre
                  </Card.Title>
                  <hr />
                  <Form.Row>
                    <Input
                      name="nome"
                      label="Semestre"
                      reference={reference}
                      size={12}
                    />

                    <Input
                      name="inicio"
                      label="Início"
                      reference={reference}
                      size={6}
                      type="date"
                    />

                    <Input
                      name="fim"
                      label="Fim"
                      reference={reference}
                      size={6}
                      type="date"
                    />
                     
                  </Form.Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <Link to="/semestres" className="btn btn-secondary mr-3">
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
