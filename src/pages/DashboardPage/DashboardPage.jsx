import "./DashboardPage.scss";
import React, { useState } from 'react';
import axios from "axios";

function DashboardPage() {
    const [failedAuth, setFailedAuth] = useState(false);
    const [user, setUser] = useState(null);

    //login
    //logout
    const login = async () => {
        //check if there is a token
        //get token

    };

    //return the profile of the user (general: for photographers and clients);
    return (
        <main>
            
        </main>
    );
}

export default DashboardPage;