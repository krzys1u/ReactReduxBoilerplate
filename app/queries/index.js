import { getUserQuery } from './getUserQuery.graphql';

import logo from '../../public/img/logo.png';

const mocks = {
    getUserQuery: {
        user_manager: {
            me: {
                info: {
                    mail: 'temp@temp.com',
                    displayName: 'Temp Temporary',
                    initials: 'TT'
                },
                user_networks: [
                    {
                        network_id: '1',
                        network_name: 'Network 1'
                    },
                    {
                        network_id: '2',
                        network_name: 'Network 2'
                    },
                    {
                        network_id: '3',
                        network_name: 'Network 3'
                    }
                ],

                user_products: [
                    {
                        id: 1,
                        name: 'First product',
                        description: 'product1',
                        logo: logo,
                        url: 'http://product1.com',
                        networks: [
                            {
                                network_id: '1',
                                network_name: 'Network1'
                            },
                            {
                                network_id: '2',
                                network_name: 'Network2'
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Second product',
                        description: 'product2',
                        logo: logo,
                        url: 'http://product2.com',
                        networks: [
                            {
                                network_id: '1',
                                network_name: 'Network1'
                            },
                            {
                                network_id: '2',
                                network_name: 'Network2'
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: 'First after second product',
                        description: 'product3',
                        logo: logo,
                        url: 'http://product3.com',
                        networks: [
                            {
                                network_id: '1',
                                network_name: 'Network1'
                            },
                            {
                                network_id: '2',
                                network_name: 'Network2'
                            },
                            {
                                network_id: '3',
                                network_name: 'Network3'
                            }
                        ]
                    }
                ]
            }
        }
    }
};

export {
    getUserQuery,
    mocks
};