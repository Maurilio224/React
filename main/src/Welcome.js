import React from "react";

export default class Welcome extends React.Component {
    render(){
        return(
            <>Welcome {this.props.name}
            <p>Your age is {this.props.age}</p>
            </>
        )
    }
}

Welcome.defaultProps = {
    name:"Maurilio",
    age:18
}
