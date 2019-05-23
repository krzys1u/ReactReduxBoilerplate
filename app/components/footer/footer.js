import React, { Component } from 'react';

export class Footer extends Component {
    render() {

        return (
            <div className='footer'>
                <div className="footer-info">
                    <span className="green">React - Redux</span>
                    <span className="blue">Boilerplate</span>
                    <span className="footer_version"> v{this.props.version} </span>
                    <a href="https://github.com/krzys1u/ReactReduxBoilerplate">@Krzysztof Stożek</a>
                </div>
            </div>
        );
    }
}
