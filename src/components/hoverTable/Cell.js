import React from "react";



class Cell extends React.Component {
   constructor() {
      super();
      this.state = {
         cellStyle: {
            background: '#B26EB2',
         }
      }
   }

   handleMouse = () => {
      this.state.cellStyle.background === '#B26EB2' ? this.setState({ cellStyle: { background: '#ADF1D2' } }) : this.setState({ cellStyle: { background: '#B26EB2' } });
   }
   render() {
      return (
         <div className='hover-table__cell' onMouseOver={this.handleMouse} style={this.state.cellStyle} ></div>
      )
   }
};

export default Cell;
