import React from "react"

class Tools extends React.Component {
    render(){
        const {children,onAction}=this.props
        const onlyChild=React.Children.only(children);
        const count=React.Children.count(onlyChild.props.children);
        return (
            <>
            <div className="list-header">
                <select name="" id="list" onChange={onAction}>
                    <option value="all">ALL</option>
                    <option value="active">ACTIVE</option>
                    <option value="notactive">NOT ACTIVE</option>
                </select>
            </div>
            {children}
            <div className="list-footer">
                The count is {count}
            </div>
            </>
        )
    }
}

export default Tools;