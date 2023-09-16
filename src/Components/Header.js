import React from 'react'

import './Header.css'


const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <div className='logo'>
                        <span>UI</span> Design Daily
                    </div>
                    <ul className='ul'>
                        <li className='li'>Designs</li>
                        <li className='li'>About</li>
                        <li className='li'>Lisence</li>
                        <li className='li'>Contact</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header