import React from 'react';
import ReactDOM from 'react-dom';

import { CalendarBase } from '../components/CalendarBase';

export class AppContainer {
    constructor(appRoot) {
        this.appRoot = appRoot;
        this.unmount = this.unmount.bind(this);

        ReactDOM.render(<CalendarBase unmount={this.unmount}/>, appRoot);
    }

    unmount() {
        ReactDOM.unmountComponentAtNode(this.appRoot);
    }
}
