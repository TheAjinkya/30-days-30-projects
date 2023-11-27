import { React, Component } from 'react'

const WithCounter = (OriginalComponent) => {

    class UpdatedComponent extends Component {

        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
        }

        increment = () => {
            this.setState(prevState => ({ count: prevState.count + 1 }))
        }
        decrement = () => {
            this.setState(prevState => ({ count: prevState.count - 1 }))
        }
        reset = () => {
            this.setState({ count: 0 })
        }
        render() {
            return <OriginalComponent count={this.state.count} increment={this.increment} />
        }
    }
    return UpdatedComponent
}

export default WithCounter