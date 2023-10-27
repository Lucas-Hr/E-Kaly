import React from 'react';
import Client from './client/Client';
import Admin from './admin/Admin';
import Chef from './chef/Chef';
import App from '../routes/communication/App';

const SelectUser = () => {
    return(
        /* Choose between Client screen, Admin screen, Chef screen*/
        // <Client />
        // <Admin />
        // <Chef />
        <App />
    );
};

export default SelectUser;