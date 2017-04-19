import React from "react"
import { Motion, spring } from "react-motion"
import styled from "styled-components"

const BarContainer = styled.div`
  width:500px;
  position: relative;
  height: 20px;
  background: lightgray;
`
const BarInnter = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 0;
  background-color: darkslateblue;
`

const Bar = ({width, color}) => {
  return (
    <BarContainer>
      <BarInnter style={ {width: `${width}%`, backgroundColor: color} } />
    </BarContainer>
  )
}

export class ProgressBar extends React.Component {
  shouldComponentUpdate(nextProps){
    // 不正な値が来たら更新を無視する
    const { progress } = nextProps
    return !isNaN(parseInt(progress, 10))
  }
  render() {
    const progress = parseInt(this.props.progress, 10)
    return <Motion defaultStyle={{p: 0, color: 0}} style={{
      p: spring(progress), 
      color: spring(progress, {stiffness: 1000, damping: 5} )
    }}>{ (value) => {
      console.log(value.color)
      return <div>
        <div>{Math.ceil(value.p)}%</div>
        <Bar width={`${value.p}`} color={`hsl(${value.color*2}, 50%, 50%)`} />
      </div>
    }}</Motion>
  }
}
