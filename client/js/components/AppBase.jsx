import React from 'react';
import ReactDOM from 'react-dom';

import { BreezeBase } from './BreezeBase';

export class AppBase {
    constructor(appRoot) {
        this.appRoot = appRoot;
        this.unmount = this.unmount.bind(this);

        ReactDOM.render(<BreezeBase unmount={this.unmount}/>, appRoot);
    }

    unmount() {
        ReactDOM.unmountComponentAtNode(this.appRoot);
    }
}
