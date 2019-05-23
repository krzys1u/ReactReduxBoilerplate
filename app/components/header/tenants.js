// @flow
import React, { Component } from 'react';

import { Dropdown} from 'semantic-ui-react';

import { User, HeaderInfo } from '../../models';
import { Network } from '../../models/user';

type Props = {
    network: string,
    user: User,
    chooseCallback: (nt: string) => void
}

export class Tenants extends Component<Props> {
    menuRef: Dropdown;

    getNetworkData(): React$Element<any> {
        const { user, network } = this.props;

        if (!user) {
            return <div></div>;
        }
        const headerInfo: HeaderInfo = user.getHeaderInfo(network);

        return (
            <div className="user_network">
                <span>
                    {headerInfo.big}
                </span>
                <small>
                    {headerInfo.small}
                </small>
            </div>
        )
    }

    getUserAvatar(): React$Element<any> {
        const { user } = this.props;

        if (!user){
            return <div></div>
        }

        return (
            <div className="user_avatar">
                <span>{user.getInitials()}</span>
            </div>
        );
    }

    getUserNetworks(): Array<React$Element<any>> {
        const { user, network, chooseCallback } = this.props;

        let list: Array<React$Element<any>> = [
            <Dropdown.Header content='Choose network' key="tenants_dropdown_header"/>,
            <Dropdown.Divider key="tenants_dropdown_divider" />
        ];

        if (!user) {
            return [];
        }

        let networks: { [string]: Network } = user.getNetworks();

        if(!networks || !Object.keys(networks).length) {
            return [];
        }

        for(let nt: string in networks) {
            let currentNetwork: Network = networks[nt];
            let current: boolean = nt === network;

            let props: Object = {
                text: currentNetwork.getName(),
                description: `NT-${currentNetwork.getId()}`,
                key: `network_${currentNetwork.getId()}`,
            };

            if (current){
                props.icon = 'attention';
            }

            list.push(
                <Dropdown.Item {...props} onClick={chooseCallback.bind(this, nt)}/>
            )
        }

        return list;
    }

    openMenu(e: SyntheticEvent<HTMLButtonElement>){
        this.menuRef.toggle(e);
    }

    logoutUser() {
        location.href= '/logout';
    }

    render() {
        return (
            <div>
                <div className="menu_user" onClick={this.openMenu.bind(this)}>
                    {this.getNetworkData()}
                    {this.getUserAvatar()}
                </div>

                <Dropdown icon={false} ref={(ref) => this.menuRef = ref} floating pointing className="networks-dropdown">
                     <Dropdown.Menu>
                         {this.getUserNetworks()}

                         <Dropdown.Divider />
                         <Dropdown.Item text={"Logout"} description={"x"} onClick={this.logoutUser.bind(this)}/>
                     </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }
}
