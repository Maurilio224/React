import React from "react";

export default class Welcome extends React.Component {
    render() {
        if (this.props.name == "John") {
            return (
                <>Welcome {this.props.name}

                </>
            )
        }
    }
}

Welcome.defaultProps = {
    name: "Andrea",
    age: 18
}
