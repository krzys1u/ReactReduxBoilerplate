// @flow

import * as queries from '../queries';

export function query(query: string): Promise<any> {
    //const client: ApolloClient = createClient(network, token);

    return new Promise((resolve) => {
        setTimeout(() => resolve({data: queries.mocks[query]}), 2500);
    });
}