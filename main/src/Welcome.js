import React from "react";

export default class Welcome extends React.Component {
    render(){
        return(
            <>Welcome {this.props.name}</>
        )
    }
}

Welcome.defaultProps = {
    name:"Maurilio"
}
