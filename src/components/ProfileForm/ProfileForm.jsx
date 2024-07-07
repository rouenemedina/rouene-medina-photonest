import "./ProfileForm.scss";
import React, { useState } from 'react';

function ProfileForm() {
    const [profile, setProfile] = useState({
        profile_photo: [],
        profile_name: "",
        profile_description: "",
        profile_feature: []
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProfile({...profile, [name]: value});
    };

    

    return (
        <main>
            
        </main>
    );
}

export default ProfileForm;