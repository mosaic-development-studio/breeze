import React from 'react';
import ReactDOM from 'react-dom';

import { AppBase } from '../components/AppBase';

export class AppContainer {
    constructor(appRoot) {
        this.appRoot = appRoot;
        this.unmount = this.unmount.bind(this);

        ReactDOM.render(<AppBase unmount={this.unmount}/>, appRoot);
    }

    unmount() {
        ReactDOM.unmountComponentAtNode(this.appRoot);
    }
}
