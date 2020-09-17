import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function NavBar() {
    return (
        <div className="navbar">
        <ul>
        <Link className="link" to="/">Take me Home</Link>
        </ul>
        </div>
    );
}