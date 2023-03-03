import { Component, memo } from "react";

let count = 0;
class MemoComponent extends Component {
  componentDidUpdate() {
    count++;
  }

  componentDidMount() {
    console.log("on this");
  }

  render() {
    return (
      <div>
        <div className="text-2xl">Rerender with memo: {count}</div>
        <div className="text-sm">
          Count prop from parent: {this.props.parentCount}
        </div>
      </div>
    );
  }
}

export default memo(MemoComponent);
