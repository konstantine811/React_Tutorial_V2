import { Component, memo } from "react";

class UseRef extends Component {
  componentDidMount() {
    this.animate();
  }

  animate = () => {
    requestAnimationFrame(this.animate);
  };

  render() {
    return <div>Hell from UseRef</div>;
  }
}

export default memo(UseRef);
