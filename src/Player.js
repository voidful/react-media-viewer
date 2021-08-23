import React, {Component} from 'react'
import ReactPlayer from 'react-player'
import {findDOMNode} from 'react-dom'
import Controller from './Controller';
import {convertHexToRgbA} from './utils'
import screenfull from 'screenfull'
import './Player.css';


export default class Player extends Component {

    alteredOnPlay = undefined;
    alteredProps = undefined;
    playerRef = undefined;
    playerViewRef = undefined;

    state = {
        progress: 0,
        playing: false,
        paused: true,
        setPlaying: false,
        fullscreen: false,
        setSeek: 0,
        duration: 0
    }

    constructor(props) {
        super(props);
        this.setAlteredProps(props);
        this.alteredProps = {
            ...props, onPlay: this.alteredonPlay,
            onPause: this.alteredonPause, onDuration: this.alteredonDuration,
            onProgress: this.alteredonProgress, progressInterval: 100
        }
        this.setTheme(props.theme);
        this.playPause = this.playPause.bind(this)
        this.handleClickFullscreen = this.handleClickFullscreen.bind(this)

    }

    setAlteredProps(props) {
        let eventProps = ["onPlay", "onPause", "onDuration", "onProgress"]
        eventProps.forEach((val, index) => {
            if (props[val]) {
                let temp = props[val]
                this['altered' + val] = (e) => {
                    this[val](e);
                    temp(e);
                }
            } else
                this['altered' + val] = (e) => {
                    this[val](e);
                }
        })
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        if (screenfull.isEnabled) {
            screenfull.on('change', () => {
                this.setState({fullscreen: screenfull.isFullscreen});
            });
        }
    }


    handleKeyDown = (event) => {
        if (event.code === 'Space') {
            this.playPause();
        }
        if (event.code === 'ArrowLeft') {
            this.setSeek(this.state.playedSeconds - 3, 'seconds')
        }
        if (event.code === 'ArrowRight') {
            this.setSeek(this.state.playedSeconds + 3, 'seconds')
        }
    }

    onPlay(e) {
        this.setState({...this.state, playing: true, paused: false});
    }

    onPause(e) {
        this.setState({...this.state, paused: true, playing: false});
    }

    onDuration(e) {
        console.log(e);
        this.setState({...this.state, duration: e});
    }

    onProgress(e) {
        this.setState({
            ...this.state,
            progress: e.played,
            playedSeconds: e.playedSeconds,
            loadedSeconds: e.loadedSeconds - e.playedSeconds,
        });
    }

    setSeek(e, t) {
        console.log("set seek " + e);
        this.playerRef.seekTo(e, t);
        this.setState({...this.state, setPlaying: true});
    }


    setTheme(theme) {
        document.documentElement.style.setProperty('--highlight-color', theme.highlightColor);
        document.documentElement.style.setProperty('--icon-focus-color', convertHexToRgbA(theme.highlightColor, 0.3));
    }

    playPause() {
        this.setState({...this.state, setPlaying: !this.state.setPlaying});
    }

    handleClickFullscreen() {
        if (screenfull.isEnabled) {
            if (screenfull.isFullscreen) {
                screenfull.exit()
            } else {
                screenfull.request(findDOMNode(this.playerViewRef));
            }
        }
    }

    render() {
        let {theme, width, height, metadata, style, url} = this.props;
        if (screenfull.isFullscreen) {
            width = "100%"
            height = "100%"
            style = {}
        }
        this.alteredProps = {
            ...this.alteredProps,
            playing: this.state.setPlaying,
            width: width,
            height: height,
            style: style,
            url: url
        }
        return (
            <div className="player-wrapper" ref={(r) => this.playerViewRef = r}>
                <ReactPlayer className='react-player' width={width} height={height} style={style}
                             {...this.alteredProps}
                             playing={this.state.setPlaying}
                             ref={(r) => this.playerRef = r}/>
                <Controller theme={theme} metadata={metadata} style={style}
                            playPause={this.playPause} width={width} height={height}
                            handleClickFullscreen={this.handleClickFullscreen}
                            playerState={this.state} setSeek={(e, t) => this.setSeek(e, t)}/>
            </div>);
    }
}