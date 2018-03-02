import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';

class Portal extends React.Component {
  static propTypes = {
    children: propTypes.any.isRequired,
    mountNode: propTypes.any,
  };

  componentWillMount() {
    // if no mountNode is passed to the component, we will append a mountNode to body element
    if (!this.props.mountNode) {
      this.mountNode = document.createElement('div');
      this.mountNode.className += 'outer-element';
      document.body.appendChild(this.mountNode);
    } else {
      this.mountNode = this.props.mountNode;
    }
  }

  componentWillUnmount() {
    if (!this.props.mountNode) {
      document.body.removeChild(this.mountNode);
    }
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.mountNode);
  }
}

export default Portal;
