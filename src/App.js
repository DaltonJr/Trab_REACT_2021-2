import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from './services/Firebase'
import Login from './views/Login'
import Home from './views/Home'
import CEquipe from './views/CEquipe'
import EquipesLista from './views/EquipesLista'
import Menu from './components/Menu'
import FA from './views/FA'
import Contato from './views/Contato'
import Suporte from './views/Suporte'

function App() {

  const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route
      {...rest}
      render={props => isAuthenticated() ? (
        <>
          <Menu />
          <Component {...props} />
        </>
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
      }
    />
  }



  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/fa" component={FA} />
        <PrivateRoute path="/cadastro-equipe" component={CEquipe} />
        <PrivateRoute path="/equipeslista" component={EquipesLista} />
        <PrivateRoute path="/contato" component={Contato} />
        <PrivateRoute path="/suporte" component={Suporte} />
        
        <Route path="*" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
