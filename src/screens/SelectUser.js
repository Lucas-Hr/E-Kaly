import React from 'react';
import Client from './client/Client';
import Admin from './admin/Admin';
import Chef from './chef/Chef';

const SelectUser = () => {
    return(
        /* Choose between Client screen, Admin screen, Chef screen*/
        // <Client />
        // <Admin />
        <Chef />
    );
};

export default SelectUser;