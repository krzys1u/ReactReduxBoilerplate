// @flow

import Promise from 'promise-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { Grid } from 'semantic-ui-react';

import store from './store';

import { Header, Footer } from './components';
import {
    SearchContainer,
    ApplicationsContainer,
    TenantsContainer,
    OutOfAppContainer
} from './containers';

import style from '../public/styles/global.scss';

const element = document.getElementById('root');

// To add to window
if (!window.Promise) {
    window.Promise = Promise;
}

if (!element) {
    throw new Error("No root element");
}

render(
    <Provider store={store}>
        <div id="main">
            <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column width={3} only='computer'>

                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={16} floated='right' only='mobile tablet'>
                        <TenantsContainer />
                    </Grid.Column>
                    <Grid.Column mobile={16} computer={10} >
                        <div className='content'>
                            <Header/>
                            <SearchContainer />
                            <ApplicationsContainer />
                        </div>
                    </Grid.Column>
                    <Grid.Column width={3} floated='right' only='computer'>
                        <TenantsContainer />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Footer version={window.catalogVersion} />
            <OutOfAppContainer />
        </div>
    </Provider>,
    element
);

