import React from 'react';
import './Footer.css';

/* Multi idioma */



const Footer = () =>{
    // Fecha
    let fecha = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p>
                        Page created by Vanshika
                    </p>
                    <p>&copy; {fecha}. All Rights Reserved.</p>
                </div>
                <div className="redes-sociales">
                    <a href="https://www.linkedin.com/in/vanshikazawar/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/vanshikazawar27" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
                    <a href="https://x.com/vanshikazawar" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    {/* <a href="https://api.whatsapp.com/send?phone=5493815360966" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a> */}
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);