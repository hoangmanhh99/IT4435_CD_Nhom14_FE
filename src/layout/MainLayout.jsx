import React from 'react';

export default function MainLayout({children, user, logout}){

    return (
        <div>
            <div user={user} logout={(e) => logout(e)}/>
                {
                    children
                }
            <div/>
        </div>
    )
}