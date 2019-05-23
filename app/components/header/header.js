import React, { Component } from 'react';

import logo from '../../../public/img/logo.png';

import { Image } from 'semantic-ui-react';

export class Header extends Component {
    render() {
        return (
            <div className='head'>
                <Image src={logo} size='small' centered/>
                <div className='app_name'>
                    Products
                </div>
            </div>
        );
    }
}
