import React from "react"
import { Motion, spring } from "react-motion"
import "./progress.css"

const Bar = ({width}) => (
  <div className={"progress"}>
    <div className={"barBase"}>
      <span className={"bar"} style={ {width: `${width}%`} } />
    </div>
  </div>
)

export class ProgressBar extends React.Component {
  shouldComponentUpdate(nextProps){
    return typeof nextProps.progress === "number"
  }
  render() {
    const { progress } = this.props
    return <Motion defaultStyle={{width: 0}} style={{width: spring(progress)}}>{ (value) =>
      <Bar width={value.width} />
    }</Motion>
  }
}
