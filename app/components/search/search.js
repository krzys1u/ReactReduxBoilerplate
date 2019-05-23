// @flow
import React, { Component } from 'react';
import { Input, Checkbox, Icon } from 'semantic-ui-react';

import { debounce } from '../../utils';

type Props = {
    searchQuery: string,

    filterApps: (query: string) => void,
}

export class Search extends Component<Props> {
    inputDebouncer: () => void;
    searchInput: Input;

    constructor(props: Props) {
        super(props);

        this.inputDebouncer = debounce(() => {
            this.props.filterApps(this.searchInput.inputRef.value);
        }, 100);
    };

    render() {
        const { searchQuery } = this.props;

        if (this.searchInput){
            if(!searchQuery) {
                this.searchInput.inputRef.value = this.props.searchQuery;
            }
        }

        return (
            <Input className="searchHolder">
                <Input
                    icon="search"
                    placeholder='Search...'
                    ref={ref => this.searchInput = ref}
                    onChange={this.onChange.bind(this)}
                />
            </Input>
        );
    }

    onChange() {
        this.inputDebouncer();
    };
}

