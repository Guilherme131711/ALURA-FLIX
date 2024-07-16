import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

import logoMain from '../../assets/images/LogoMain.png';
import Button from '../Button';
// import ButtonLink from '../components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
			<Link to="/">
                <img 
                    className="Logo" 
                    src={logoMain} 
                    alt="Logo Alura Flix"
                />
			</Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;