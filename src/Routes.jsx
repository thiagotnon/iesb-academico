import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Alunos from './pages/alunos/Alunos';
import AlunoForm from './pages/alunos/AlunoForm';
import Professores from './pages/professores/Professores';
import ProfessorForm from './pages/professores/ProfessorForm';
import Cursos from './pages/cursos/Cursos';
import CursoForm from './pages/cursos/CursoForm';
import Salas from './pages/salas/Salas';
import SalaForm from './pages/salas/SalaForm';
import Disciplinas from './pages/disciplinas/Disciplinas';
import DisciplinaForm from './pages/disciplinas/DisciplinaForm';

// eslint-disable-next-line import/no-anonymous-default-export
export default() => {
  return(
    <>
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/alunos' component={Alunos} />
        <Route exact path='/disciplinas' component={Disciplinas} />
        <Route exact path='/disciplina/nova' component={DisciplinaForm} />
        <Route exact path='/aluno/novo' component={AlunoForm} />
        <Route exact path='/professores' component={Professores} />
        <Route exact path='/professor/novo' component={ProfessorForm} />
        <Route exact path='/turmas' component={HomePage} />
        <Route exact path='/cursos' component={Cursos} />
        <Route exact path='/cursos/novo' component={CursoForm} />
        <Route exact path='/salas' component={Salas} />
        <Route exact path='/salas/novo' component={SalaForm} />
      </Switch>
      </BrowserRouter>
    </>
  );
}