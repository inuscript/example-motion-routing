import React from "react"
import { Motion, spring } from "react-motion"
import styles from "./progress.css"

export class ProgressBar extends React.Component {
  shouldComponentUpdate(nextProps){
    return typeof nextProps.progress === "number"
  }
  render() {
    const { progress } = this.props
    return <Motion defaultStyle={{width: 0}} style={{width: spring(progress)}}>{value =>
      <div className={styles.progress}>
        <div className={styles.barBase}>
          <span className={styles.bar} style={ {width: `${value.width}%`} } />
        </div>
      </div>
    }</Motion>
  }
}
