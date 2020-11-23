import React from 'react'
import { Col, Form } from 'react-bootstrap';
import { mask, unMask } from 'remask';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [value, setValue] = React.useState()

  const id = props.id ? props.id : props.name;

  const { errors, register, validator} = props.reference;
  const inputValidator = validator.hasOwnProperty(props.name) ? validator[props.name] : {};
  const inputErrors = errors.hasOwnProperty(props.name) ? errors[props.name] : false;
  const required = () => (validator[props.name]?.required ? <span className='text-danger'>*</span> : '');

  const handleChange = (event) => {
    const valor = props.mask ? mask(unMask(event.target.value), props.mask) : event.target.value;
    setValue(valor);
  }

    return (
      <>
        <Form.Group 
        as={Col} 
        md={props.size} 
        controlId={id}
        >
          <Form.Label>
            {props.label} {required()}
          </Form.Label>
          <Form.Control
          ref={register(inputValidator)}
            {...props}
            isInvalid={inputErrors}
            value={value}
            onChange={handleChange}
          />
          <Form.Control.Feedback
          type="invalid"
          >
            {inputErrors?.message}
          </Form.Control.Feedback>
        </Form.Group>
      </>
     );
}

