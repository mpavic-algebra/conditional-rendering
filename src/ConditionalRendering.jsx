import React from 'react'

class ConditionalRendering extends React.Component{
    constructor(props) {
        super(props)
        this.veciBroj = <p>veliki broj</p>
        this.manjiBroj = <p>jako mali broj</p>
        this.provjera = this.props.number > 5 ? this.veciBroj : this.manjiBroj
    }
    render() {
        return (
            <>
                <h1>
                    Conditional Rendering {this.props.number}
                </h1>
                {this.props.number && this.provjera}
            </>
        )
    }
    }

export default ConditionalRendering