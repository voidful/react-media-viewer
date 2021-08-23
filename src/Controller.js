import React, {Component} from 'react'
import ControllerBottomBar from './ControllerBottomBar';
import ControllerTopBar from './ControllerTopBar';
import './Player.css';

export default class Controller extends Component {

    render() {
        const {
            theme,
            metadata,
            playPause,
            playerState,
            setSeek,
            handleClickFullscreen,
            width,
            height,
            style
        } = this.props;

        return (
            <div className="rtl-controls-container" style={Object.assign({"height": height, "width": width}, style)}>
                <ControllerTopBar theme={theme} title={metadata.title} subtitle={metadata.subtitle}/>
                <ControllerBottomBar theme={theme} playPause={playPause} playerState={playerState}
                                     handleClickFullscreen={handleClickFullscreen}
                                     setSeek={setSeek}/>
            </div>
        );
    }
}
