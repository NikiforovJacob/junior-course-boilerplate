import React from "react";
import { logger } from "csssr-school-utils";

class logRender extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    logger.call(this.props.parentContext, this.props.parentContext.constructor.name, nextProps, nextState);
    return true
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default logRender;
