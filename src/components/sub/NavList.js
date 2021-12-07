import React from 'react';
import NavElement from './NavElement';

export default function NavList({navs}) {
    const elements = navs.map(nav =>
        <NavElement key={nav.id} element = {nav} />
    );
    return (
        <ul className="nav">{elements}</ul>
    )
}