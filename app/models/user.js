// @flow

import { Application } from './application';

export type HeaderInfo = {
    small: string,
    big: string
}

export class Network {
    _name: string;
    _id: string;

    constructor(id: string, name: string) {
        this._name = name;
        this._id = id;
    }

    getName(){
        return this._name;
    }

    getId(){
        return this._id;
    }
}

export class User{
    _info: Object;
    _applications: { [string]: Array<Application> };
    _networks: { [string]: Network };
    _mail: string;
    _displayName: string;
    _initials: string;

    constructor(products: Array<Object>, info: Object){
        let productsPerNetwork: { [string]: Array<Application> } = {};
        let networks: { [string]: Network } = {};

        for(let product:Object of products){
            let name = product.name.replace(/([A-Z])/g, ' $1').replace(/^./, function(str) {
                return str.toUpperCase();
            }).trim();

            product.networks.forEach(item => {
                const networkId: string = item.network_id.replace('NT-', '');
                let url: string = product.url;

                if (!productsPerNetwork[networkId]) {
                    productsPerNetwork[networkId] = [];
                }
                if (!networks[networkId]){
                    networks[networkId] = new Network(networkId, item.network_name);
                }

                if (!url){
                    url = `/${product.id}/NT-${networkId}/#/`;
                }

                const application: Application = new Application(name, product.logo, product.id, url);

                productsPerNetwork[networkId].push(application);
            });
        }
        this._info = info;
        this._mail = info.mail;
        this._displayName = info.displayName;
        this._initials = info.initials;
        this._applications = productsPerNetwork;
        this._networks = networks;
    }

    getHeaderInfo(network: string): HeaderInfo{
        const currentNetwork: Network = (this._networks|| {})[network];

        let small = this._mail;
        let big = this._displayName;

        if (currentNetwork) {
            small = `NT-${currentNetwork.getId()}`;
            big = currentNetwork.getName();
        }

        return {
            small,
            big
        }
    }

    getInfo(){
        return this._info;
    }

    getMail() {
        return this._mail;
    }

    getDisplayName() {
        return this._displayName;
    }

    getInitials() {
        return this._initials;
    }

    getApplications(network: string): Array<Application>{
        return this._applications[network];
    }

    getNetworks(){
        return this._networks;
    }
}