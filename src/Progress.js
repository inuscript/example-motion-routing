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
    const { progress } = nextProps
    return !isNaN(parseInt(progress, 10))
  }
  render() {
    const progress = parseInt(this.props.progress, 10)
    return <Motion defaultStyle={{width: 0}} style={{width: spring(progress)}}>{ (value) => {
      return <div>
        <div>{Math.ceil(value.width)}%</div>
        <Bar width={value.width} />
      </div>
    }}</Motion>
  }
}
