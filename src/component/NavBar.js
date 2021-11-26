import React from "react";
import './NavBar.css'


export class NavBar extends React.Component {
    render(){
        const pages = ['Home', 'Blog', 'Pics', 'Art', 'NFT'];
        const navLinks = pages.map(page => {
            return(
                <a href = {'/' + page}>
                    {page}
                </a>
            )
        })
        return <nav>{navLinks}</nav>
    }
}