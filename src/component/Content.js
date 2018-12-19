import React from 'react';

class Content extends React.Component {
    render() {
        return (
            <div className={this.props.cls}>
            {this.props._content}
            </div>
        )
    }
}

export default Content;