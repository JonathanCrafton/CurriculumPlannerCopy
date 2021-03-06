import React from 'react';
import { Container } from '@material-ui/core';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import useStyles from './styles';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import DegreesList from './components/DegreesList/DegreesList';
import SearchDegreesList from './components/SearchDegreesList/SearchDegreesList';
import Admin from './components/Admin/Admin';
import AddDegreeStepper from './components/AddDegreeStepper/AddDegreeStepper';
import Footer from './components/Footer/Footer';
import Plan from './components/Plan/Plan';
import EditDegreeList from './components/EditDegree/EditDegreeList/EditDegreeList';
import EditDegreeStepper from './components/EditDegreeStepper/EditDegreeStepper';
import AddAdmin from './components/AddAdmin/AddAdmin';

const App = () => {
    const classes = useStyles();
    
    return (
        <BrowserRouter>
            <Container maxWidth="xl">
                <Navbar/>
                <div className={classes.topAppBar}>
                <Switch>
                    <Route path="/csc530/dev" exact component={Home}/>
                    <Route path="/csc530/dev/auth" exact component={Auth}/>
                    <Route path="/csc530/dev/degrees" exact component={DegreesList}/>
                    <Route path="/csc530/dev/searchdegree" exact component={SearchDegreesList}/>
                    <Route path="/csc530/dev/admin/editdegree" exact render={() => (
                        !localStorage.getItem('profile') ? (
                            <Redirect to="/csc530/dev/auth"/>
                        ) : (
                            <EditDegreeList/>
                        )
                    )}/>
                    <Route path="/csc530/dev/admin/addadmin" exact render={() => (
                        !localStorage.getItem('profile') ? (
                            <Redirect to="/csc530/dev/auth"/>
                        ) : (
                            <AddAdmin/>
                        )
                    )}/>
                    <Route path="/csc530/dev/admin" exact render={() => (
                        !localStorage.getItem('profile') ? (
                            <Redirect to="/csc530/dev/auth"/>
                        ) : (
                            <Admin/>
                        )
                    )}/>
                    <Route path="/csc530/dev/admin/add" exact render={() => (
                        !localStorage.getItem('profile') ? (
                            <Redirect to="/csc530/dev/auth"/>
                        ) : (
                            <AddDegreeStepper/>
                        )
                    )}/>
                    <Route path='/csc530/dev/degrees/:id' component= {Plan}/>
                    <Route path='/csc530/dev/admin/edit/:id' exact render = {() => (
                        !localStorage.getItem('profile') ? (
                            <Redirect to="/csc530/dev/auth"/>
                        ) : (
                            <EditDegreeStepper/>
                        )
                    )}/>
                </Switch>
                </div>
                <Footer/>
            </Container>
        </BrowserRouter>
    );
}

export default App;
