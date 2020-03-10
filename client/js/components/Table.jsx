import React from 'react';

export const Table = props => {
    return (
        <table className="breeze__table">
            <caption className="breeze__table-caption">Some Calendar Caption</caption>
            {props.children}
        </table>
    );
};