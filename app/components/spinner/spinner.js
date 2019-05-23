// @flow

import React, { Component } from 'react';
import { Dimmer, Loader, Transition} from 'semantic-ui-react';

type Props = {
    active: boolean
};

export class Spinner extends Component<Props> {
    static defaultProps = {
        active: true,
    };
    render() {
        const {active} = this.props;

        return (
            <div>
                <Transition visible={active} animation='fade' duration={750}>
                    <Dimmer active={active} >
                        <Loader size='large' />
                    </Dimmer>
                </Transition>
            </div>
        );
    }
}


