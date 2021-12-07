import React from 'react';
import {
    Link
} from "react-router-dom";

export default function NavElement({element}) {
    return (
        <li className="link" key={element.id} id={element.elementId}>
            <Link to={element.route}>{element.linkName}</Link>
        </li>
    )
}