// @flow
import React, { Component } from 'react';

import { Image as ImageComponent, Item } from 'semantic-ui-react';

import { Application as ApplicationModel } from '../../models';

type Props = {
    application: ApplicationModel
};

class Application extends Component<Props>{
    render() {
        const { application } = this.props;

        return (
            <a href={application.getUrl()}>
                <div className='application_box'>
                    <Item.Group relaxed>
                        <Item>
                            <Item.Image size='mini' src={application.getLogo()} />

                            <Item.Content verticalAlign='middle'>
                                <Item.Header>{application.getName()}</Item.Header>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </div>
            </a>
        );
    }
}

export default Application;
