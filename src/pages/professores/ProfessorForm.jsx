import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaUserAlt, FaMapMarkerAlt } from "react-icons/fa";
import PageTemplate from "../../components/PageTemplate";
import validator from "../../validator/professorValidator";
import Input from "../../components/forms/Input";
import Select from '../../components/forms/Select';
import apiIbge from '../../services/apiIbge';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [ufs, setUfs] = React.useState([]);

  const { register, handleSubmit, errors } = useForm();
  const reference =  { register, validator, errors };
  const onSubmit = (data) => console.log(data);

  React.useEffect(() => {
    apiIbge.get('estados?orderBy=nome').then(results => {
      setUfs(results.data)
    })
  }, []);

  return (
    <>
      <PageTemplate
        title={"Novo professor"}
        subtitle={"Formulário de cadastro para novo professor."}
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={6} className='mb-5 mb-md-0'>
              <Card>
                <Card.Body>
                  <Card.Title className="d-flex align-items-center">
                    <FaUserAlt className="mr-2 text-secondary" /> Professor
                  </Card.Title>
                  <hr />
                  <Form.Row>
                    <Input
                      name="nome"
                      label="Nome"
                      reference={reference}
                      size={12}
                    />

                    <Input
                      name="cpf"
                      label="CPF"
                      reference={reference}
                      size={6}
                      mask="999.999.999-99"
                    />

                    <Input
                      name="matricula"
                      label="Matrícula"
                      reference={reference}
                      size={6}
                    />

                    <Input
                      name="email"
                      label="E-mail"
                      type="email"
                      reference={reference}
                      size={6}
                    />

                    <Input
                      name="telefone"
                      label="Telefone"
                      reference={reference}
                      size={6}
                      mask={["(99) 9999-9999", "(99) 9.9999-9999"]}
                    />
                  </Form.Row>
                </Card.Body>
              </Card>
            </Col>
                   
                  

            <Col md={6} className='mb-5 mb-md-0'>
              <Card>
                <Card.Body>
                  <Card.Title className="d-flex align-items-center">
                    <FaMapMarkerAlt className="mr-2 text-secondary" />
                    Endereço
                  </Card.Title>
                  <hr />
                  <Form.Row>
                     <Input
                      name="cep"
                      label="CEP"
                      reference={reference}
                      size={4}
                      mask="99.999-999"
                    />

                    <Select 
                      size={4} 
                      label="UF" 
                      data={ufs} 
                      key='sigla' 
                      value='sigla' 
                      name='nome' 
                      reference={reference} 
                    />


                    <Input
                      name="municipio"
                      label="Município"
                      reference={reference}
                      size={4}
                    />

                    <Input
                      name="bairro"
                      label="Bairro"
                      reference={reference}
                      size={6}
                    />

                    <Input
                      name="logradouro"
                      label="Logradouro"
                      reference={reference}
                      size={6}
                    />

                    <Input
                      name="complemento"
                      label="Complemento"
                      reference={reference}
                      size={9}
                    />

                    <Input
                      name="numero"
                      label="Número"
                      reference={reference}
                      size={3}
                    />
                  </Form.Row>
                </Card.Body>
              </Card> 
            </Col>
          </Row>
          <div className="d-flex justify-content-end align-items-center mt-3">
            <Link to="/professors" className="btn btn-secondary mr-3">
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
