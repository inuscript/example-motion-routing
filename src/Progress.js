import React from "react"
import { Motion, spring } from "react-motion"
import styled from "styled-components"

const BarContainer = styled.div`
  width:500px;
  position: relative;
  height: 10px;
  background: lightgray;
`
const BarInnter = styled.div`
  display: block;
  position: relative;
  height: 100%;
  width: 0;
  background-color: red;
  overflow: hidden;
`

const Bar = ({width}) => {
  return (
    <BarContainer>
      <BarInnter style={ {width: `${width}%`} } />
    </BarContainer>
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
