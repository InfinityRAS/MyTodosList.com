import React from 'react';

export const Footer = () => {
    const paraStyle = {
	    marginBottom: "0"
    }
    return (
        <footer className="bg-dark text-light py-3">
            <p className="text-center" style={paraStyle}>
                Copyright &copy; MyTodosList.com 
            </p>
	<div className="text-center">Created by Application Aryan Official</div>
        </footer>
    )
}
