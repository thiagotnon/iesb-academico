import React from 'react'
import { Col, Form } from 'react-bootstrap';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

  const id = props.id ? props.id : props.name;

  const { errors, register, validator} = props.reference;
  const inputValidator = validator.hasOwnProperty(props.name) ? validator[props.name] : {};
  const inputErrors = errors.hasOwnProperty(props.name) ? errors[props.name] : false;

  const required = () => (validator[props.name]?.required ? <span className='text-danger'>*</span> : '');

    return (
      <>
       <Form.Group 
        as={Col} 
        md={props.size} 
        controlId={id}
        >
          <Form.Label>{props.label} {required()}</Form.Label>
          <Form.Control as="select" name='genre' ref={register(inputValidator)} isInvalid={errors[props.name]}>
            <option value="">Selecione {props.label}</option>
            {props.data.map(option => <option key={option[props.value]} value={option[props.value]}>{option[props.name]}</option>)}
          </Form.Control>
          <Form.Control.Feedback
          type="invalid"
          >
            {inputErrors?.message}
          </Form.Control.Feedback>
        </Form.Group>
      </>
     );
}

