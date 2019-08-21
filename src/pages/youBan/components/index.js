import './index.css'
import { Component } from 'react'

class Index extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="youBan">{this.props.id}</div>
        )
    }
}



export default Index