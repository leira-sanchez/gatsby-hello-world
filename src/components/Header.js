import React from 'react';
// import styled from 'styled-components';
import { Link } from 'gatsby';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    )
}

export default Header;