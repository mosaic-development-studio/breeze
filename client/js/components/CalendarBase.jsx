import React from 'react';
import { TABLE_HEADERS } from '../constants';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableHead } from './TableHead';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

export class CalendarBase extends React.Component {
    componentDidMount() {
        console.log('some fetch call');
    }

    render() {
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        {TABLE_HEADERS.map((h, i) => <TableHeader header={h} key={i + h} />)}
                    </TableRow>
                </TableHead>
                <TableBody>

                </TableBody>
            </Table>
        );
    }
}