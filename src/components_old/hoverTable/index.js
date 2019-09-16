import React from "react";
import Cell from './Cell'
import './style.css'

class HoverTable extends React.Component {
    constructor() {
        super();
        this.items = new Array(20);
        this.state = {
            cellColor: 'red',
        }
    }

    render() {
        const items = []

        for (let i = 0; i < 900; i++) {
            items.push(<Cell color={this.state.cellColor}  key={''+Math.random()} />)
        }
        return (
            <div className='hover-table-container'>
                {items}
            </div>
        )
    }
}

export default HoverTable;