import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link className='nav-link'  to='/'>Acadêmico</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className='nav-link' to="/alunos">Alunos</Link>
            <Link className='nav-link' to="/professores">Professores</Link>
            <Link className='nav-link' to="/turmas">Turmas</Link>
            <Link className='nav-link' to="/cursos">Cursos</Link>
            <Link className='nav-link' to="/disciplinas">Disciplinas</Link>
            <Link className='nav-link' to="/salas">Salas</Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
    </>
  );
}

