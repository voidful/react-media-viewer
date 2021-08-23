import React, {Component} from 'react'
import {convertHexToRgbA, formatSecsToHMS} from './utils'
import {FaPlay, FaPause, FaUndo, FaRedo} from "react-icons/fa";
import {BiFullscreen, BiExitFullscreen} from "react-icons/bi";
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

export default class ControllerBottomBar extends Component {


    constructor(props, context) {
        super(props, context)
        this.state = {
            value: 25,
            reverseValue: 8
        }
    }

    handleChange = (value) => {
        this.setState({
            value: value
        })
    }

    handleChange = (value) => {
        if (value != (this.props.playerState.progress * 1000)) {
            if (this.props.playerState.playing)
                this.props.playPause();
            this.props.setSeek(value / 1000, 'fraction');
        }
    }

    render() {
        const {theme, playPause, playerState, setSeek, handleClickFullscreen} = this.props;
        const bgColor = convertHexToRgbA(theme.bgColor, 0.9);

        const controlsBottomBarStyle = {
            background: "linear-gradient(to top, " + bgColor + " 20%, #00000000 120%)",
            color: theme.textColor,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: theme.bottomBarHeight
        }
        const bottomBarHeightInt = Number.parseInt(theme.bottomBarHeight, 10);
        const iconStyle = {
            height: bottomBarHeightInt / 3,
            margin: bottomBarHeightInt / 3,
            maxWidth: bottomBarHeightInt / 3,
            '&:hover': {
                color: "#00ff00",
                backgroundColor: "#00ff00"
            }
        }

        const textStyle = {
            height: bottomBarHeightInt / 3,
            margin: bottomBarHeightInt / 3,
            lineHeight: (bottomBarHeightInt / 3).toString() + "px",
            fontSize: "100%",
            userSelect: "none"
        }

        return (
            <div className="rtl-controls-bottom-bar" style={controlsBottomBarStyle}>
                <div className='rtl-controls-bottom-bar-slider'>
                    <Slider
                        min={0}
                        max={1000}
                        value={playerState.progress * 1000}
                        orientation='horizontal'
                        tooltip={false}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="rtl-controls-bottom-bar-buttons">
                    <div className="rtl-controls-bottom-bar-left">
                        <div className="rtl-controls-bottom-bar-button" style={iconStyle} onClick={() => playPause()}>
                            {
                                !playerState.playing ?
                                    <FaPlay size={bottomBarHeightInt / 3}/> :
                                    <FaPause size={bottomBarHeightInt / 3}/>
                            }
                        </div>
                        <div className="rtl-controls-bottom-bar-button" style={iconStyle}
                             onClick={() => setSeek(playerState.playedSeconds - 10, 'seconds')}>
                            <FaUndo size={bottomBarHeightInt / 3}/>
                        </div>
                        <div className="rtl-controls-bottom-bar-button" style={iconStyle}
                             onClick={() => setSeek(playerState.playedSeconds + 10, 'seconds')}>
                            <FaRedo size={bottomBarHeightInt / 3}/>
                        </div>
                        <div className="rtl-controls-bottom-bar-time" style={textStyle}>
                            {(formatSecsToHMS(playerState.playedSeconds).toString().indexOf("NaN") == -1) ?
                                formatSecsToHMS(playerState.playedSeconds).toString() +
                                " / " + formatSecsToHMS(playerState.duration).toString() :
                                ""
                            }
                        </div>
                        <div className="rtl-controls-bottom-bar-time" style={textStyle}>
                            {(formatSecsToHMS(playerState.loadedSeconds).toString().indexOf("NaN") == -1) && playerState.loadedSeconds > 1 ?
                                " + " + formatSecsToHMS(playerState.loadedSeconds).toString() :
                                ""
                            }
                        </div>
                    </div>
                    <div>
                        <div className="rtl-controls-bottom-bar-button" style={iconStyle}>
                            {
                                playerState.fullscreen ?
                                    <BiFullscreen size={bottomBarHeightInt / 3}
                                                  onClick={() => handleClickFullscreen()}/> :
                                    <BiExitFullscreen size={bottomBarHeightInt / 3}
                                                      onClick={() => handleClickFullscreen()}/>
                            }

                        </div>
                    </div>


                </div>
            </div>
        );
    }
}