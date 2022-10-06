import Header from "./Header";
import Footer from './Footer';
import About from "./About";
import Certificates from './Certificates';
import Prise from "./Prise";
import React from "react";
import {Switch, Route, withRouter} from 'react-router-dom';

function App() {
    const [AboutPage, editAbout] = React.useState(false);
    const [Prises, editPrise] = React.useState(false);
    const [Certificate, editCertificates] = React.useState(false);
    const [Contacts, editContacts] = React.useState(false);

    function openPage() {
        editAbout(false);
        editPrise(false);
        editCertificates(false);
        editContacts(false);
    }

    return (
        <div className="page">
            <Header AboutPage={AboutPage} Prise={Prises} Certificate={Certificate} Contacts={Contacts}
                    editAbout={editAbout}
                    editPrise={editPrise} editCertificates={editCertificates}
                    editContacts={editContacts}/>
            <Switch>
                <Route exact path='/'>
                    <About openPage={openPage} editAbout={editAbout}/>
                </Route>
                <Route path='/certificates'>
                    <Certificates openPage={openPage} editCertificates={editCertificates}/>
                </Route>
                <Route path='/certificates'>
                    <Certificates openPage={openPage} editCertificates={editCertificates}/>
                </Route>
                <Route path='/prise'>
                    <Prise openPage={openPage} editPrise={editPrise} />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default withRouter(App);
