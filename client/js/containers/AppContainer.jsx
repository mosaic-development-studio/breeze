import React from 'react';
import ReactDOM from 'react-dom';

import { BreezeBase } from '../components/BreezeBase';

export class AppContainer {
    constructor(appRoot) {
        this.appRoot = appRoot;
        this.unmount = this.unmount.bind(this);

        ReactDOM.render(<BreezeBase unmount={this.unmount}/>, appRoot);
    }

    unmount() {
        ReactDOM.unmountComponentAtNode(this.appRoot);
    }
}
