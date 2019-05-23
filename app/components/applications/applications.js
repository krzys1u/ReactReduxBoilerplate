// @flow
import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import Application from "./application";
import { EmptyResult } from '../index';

import { Application as ApplicationModel } from '../../models';

type Props = {
    applications: Array<ApplicationModel>
}

export class Applications extends Component<Props>{
    renderApplications(): Array<React$Element<any>> | React$Element<any> {
        const toRender: Array<React$Element<any>> = this.props.applications.map((app: ApplicationModel) => {
            return (
                <Grid.Column computer={4} tablet={8} mobile={16} key={`app_${app.getId()}`}>
                    <Application application={app} />
                </Grid.Column>
            );
        });

        if (!toRender.length) {
            return (
                <EmptyResult message="No applications found..." />
            )
        }

        return toRender;
    }

    render() {
        return (
            <div className='applications'>
                <Grid padded>
                    <Grid.Row columns={4}>
                        {this.renderApplications()}
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}


