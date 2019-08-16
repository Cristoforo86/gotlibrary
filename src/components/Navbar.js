import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="pa3 pa4-ns">
                    <Link onClick={this.props.clearHouseData} className="link dim black b f2 f2-ns dib mr3 pr7" to="/" title="Home">Game of Thrones Library</Link>
                    <Link className="link dim gray    f2 f3-ns dib mr3 pr2" to="/" title="Houses">Houses</Link>
                    <Link className="link dim gray    f2 f3-ns dib mr3 pr2" to="/characters" title="Characters">Characters</Link>
                    <Link className="link dim gray    f2 f3-ns dib mr3 pr2" to="/books" title="Books">Books</Link>
                    <Link className="link dim gray    f2 f3-ns dib pr2" to="/About" title="About">About</Link>
                </nav>
                
            </div>
        )
    }
}

export default Navbar;
