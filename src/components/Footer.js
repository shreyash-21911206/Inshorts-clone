import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return(
        <div>
            <h3>Made with <FontAwesomeIcon icon={faHeart}/> By Aniket</h3>
        </div>
    )
}

export default Footer;