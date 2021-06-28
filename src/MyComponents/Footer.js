import React from 'react';

export const Footer = () => {
    const paraStyle = {
	    marginBottom: "0"
    }
    return (
        <footer className="bg-dark text-light py-3">
            <p className="text-center" style={paraStyle}>
                Copyright &copy; MyTodosList.com | Created by Aryan sisodiya
            </p>
        </footer>
    )
}
