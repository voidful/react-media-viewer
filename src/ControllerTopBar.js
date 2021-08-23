import React, {Component} from 'react'
import {convertHexToRgbA} from './utils'

export default class ControllerTopBar extends Component {
  render() {
    const { theme, title, subtitle } = this.props;
    const bgColor = convertHexToRgbA(theme.bgColor, 0.9);

    const controlsTopBarStyle = {
      background: "linear-gradient(to bottom, "+ bgColor +" 20%, #00000000 100%)",
      color: theme.textColor,
      position: "absolute",
      top: 0,
      left: 0,
      right:0,
      height: theme.topBarHeight
    }
    const topBarHeightInt = Number.parseInt(theme.topBarHeight,10);
    const textStyle = {
      height: (topBarHeightInt*3)/10,
      paddingTop: topBarHeightInt/10,
      userSelect: "none"
    }
    const titleStyle = {...textStyle, fontSize: "100%"}
    const subtitleStyle = {...textStyle, fontSize: "80%", color: "rgba(255,255,255, 0.5)"}

    return (
      <div className="rtl-controls-top-bar" style={controlsTopBarStyle}>
        <span className="rtl-controls-top-bar-title" style={titleStyle}> {title} </span>
        <span className="rtl-controls-top-bar-subtitle" style={subtitleStyle}> {subtitle} </span>
      </div>
    );
  }
}