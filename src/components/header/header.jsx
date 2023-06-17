import React from 'react';

import './header.css'

export default function Header() {
    return (
        <nav className="headerBar">
            <ul>
                <li>
                    <a href="#">Últimas Notícias</a>
                </li>
                <li>
                    <a href="#">Reviews</a>
                </li>
                <li>
                    <a href="#">Transformando em RPG</a>
                </li>
                <li>
                    <a href="#">Mundo Jujutsu</a>
                </li>
            </ul>
        </nav>
    );
}
