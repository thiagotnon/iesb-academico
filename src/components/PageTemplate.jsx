import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default({title, subtitle, children, url, textButton, icon}) => {
  return(
    <>
    <Jumbotron>
      <Container>
        <Row>
          <Col md={6}>
            <h1 className="display-4">{title}</h1>
            {subtitle && 
              <p className="lead">{subtitle}</p>
            }
          </Col>
          {url && 
            <Col md={6} className='d-flex align-items-center justify-content-end'>
              <Link to={`${url}`} className='btn btn-secondary btn-sm d-flex align-items-center justify-content-between py-2'>
              {icon} {textButton}
              </Link>
            </Col>
          }
        </Row>
      </Container>
    </Jumbotron>
      <Container>
      {children}
      </Container>
    </>
  );
}
