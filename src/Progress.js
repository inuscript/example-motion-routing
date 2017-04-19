import React from "react"
import { Motion, spring } from "react-motion"
import "./progress.css"

const Bar = ({width}) => {
  return (
    <div className={"progress"}>
      <div className={"barBase"}>
        <span className={"bar"} style={ {width: `${width}%`} } />
      </div>
    </div>
  )
}

export class ProgressBar extends React.Component {
  shouldComponentUpdate(nextProps){
    return typeof parseInt(nextProps.progress) === "number"
  }
  render() {
    const progress = parseInt(this.props.progress)
    console.log(progress)
    return <Motion defaultStyle={{width: 0}} style={{width: spring(progress)}}>{ (value) => {
      return <div>
        <div>{Math.ceil(value.width)}%</div>
        <Bar width={value.width} />
      </div>
    }}</Motion>
  }
}
