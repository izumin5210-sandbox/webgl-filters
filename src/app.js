import React      from "react";
import ReactDOM   from "react-dom";
import {Surface}  from "gl-react-dom";

import GlFilter   from "./gl_filter";

class GlVideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }

  componentDidMount() {
    const loop = time => {
      requestAnimationFrame(loop);
      this.setState({ time: time / 1000 });
    };
    requestAnimationFrame(loop);
  }

  render() {
    const { width, height } = this.props;
    const { time } = this.state;
    return <Surface width={width} height={height}>
      <GlFilter hue={Math.PI * Math.cos(3 * time)}>
        <video autoPlay loop>
          <source type="video/mp4" src="video.mp4" />
        </video>
      </GlFilter>
    </Surface>;
  }
}

ReactDOM.render(<GlVideoPlayer width={640} height={480} />, document.getElementById("container"));
