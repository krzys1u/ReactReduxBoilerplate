// @flow
import React, { Component } from 'react';
import { Popup } from 'semantic-ui-react'

import type { DomainObjectState } from '../../models';

type Props = {
    trigger: React$Element<any>,
    state: DomainObjectState
}

export class StatePopup extends Component<Props>{
    render() {
        const {
            trigger,
            state
        } = this.props;

        const { mainState, otherStates } = state;
        return (
            <Popup trigger={trigger} position="left center">
                <Popup.Header>
                    {otherStates.length ? <small className="text-muted">{mainState.getDesc()}</small> : null}
                    {!otherStates.length ? mainState.getDesc() : null}
                </Popup.Header>
                <Popup.Content>
                    {otherStates.map(
                        state =>
                            <div key={state.getName()}>
                                <i className={`popup-icon fa fa-square text-${state.getLevel()} bg-${state.getLevel()}`}/>
                                {state.getDesc()}
                            </div>
                    )}
                </Popup.Content>
            </Popup>
        )
    }
}


