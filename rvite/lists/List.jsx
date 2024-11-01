import React from "react";

class List extends React.Component {
    onListClick(active){
        alert(active)
    }
    render(){
        const style=this.props.active?{color:"green"}:{color:"red"}
        return (
            <span style={style} onClick={this.props.onAction}>{this.props.active?"RELEASED":"NOT RELEASED"}</span>
        )
    }
}
export default List