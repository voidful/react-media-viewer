# react-media-viewer

Ready to go Media Player Component for React.    
Supported Source:    
`YouTube` `SoundCloud` `Facebook` `Vimeo` `Twitch` `Streamable` `Wistia` `DailyMotion` `Mixcloud` `Vidyard` `mp4` `webm` `ogv` `mp3` `HLS(m3u8)` `DASH(mpd)`
![](https://i.imgur.com/x8L52lW.png)


## Install

`yarn add react-media-viewer` or `npm install --save react-media-viewer`

## Usage

### Basic example

```javascript
import Player from 'react-media-viewer';

const App = () => (
    <Player url="/video.mp4"/>
);
```
## Props

`*` = Required

Prop | Description | default
---- | ----------- | -------
`url*`| Url of the video file to play |
`width` | Width of the media viewer | `640`
`height` | Height of the media viewer | `360`
`style` | Style of media viewer | `false`
`playing` | If set to true, the video will automatically play | `false`
`metadata` | Media metedata shown on top-bar | `{title: "Title",subtitle: "subtitle"}`
`theme` | Theme setting | `{bgColor: "#000000",textColor: "#ffffff",topBarHeight: "70px",bottomBarHeight: "50px",highlightColor: "#ff0000"}`

## Supported source

Source | demo link
---- | ----------- 
`YouTube`| https://www.youtube.com/watch?v=oUFJJNQGwhk
`SoundCloud` | https://soundcloud.com/miami-nights-1984/accelerated
`Facebook` | https://www.facebook.com/facebook/videos/10153231379946729/
`Vimeo` | https://vimeo.com/90509568
`Twitch` | https://www.twitch.tv/videos/106400740
`Streamable` | https://streamable.com/moo
`Wistia` | https://home.wistia.com/medias/e4a27b971d
`DailyMotion` | https://www.dailymotion.com/video/x5e9eog
`Mixcloud` | https://www.mixcloud.com/mixcloud/meet-the-curators/
`Vidyard` | https://video.vidyard.com/watch/YBvcF2BEfvKdowmfrRwk57
`mp4` | https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4
`webm` | https://test-videos.co.uk/vids/bigbuckbunny/webm/vp8/360/Big_Buck_Bunny_360_10s_1MB.webm
`ogv` | https://filesamples.com/samples/video/ogv/sample_640x360.ogv
`mp3` | https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3
`HLS(m3u8)` | https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8
`DASH(mpd)` | http://dash.edgesuite.net/envivio/EnvivioDash3/manifest.mpd


## Notes

`react-media-view` is built on top of `react-player` and `react-themed-player`.  
[react-player](https://www.npmjs.com/package/react-player)  
[vivek-nutcrackerz's react-simple-video-player](https://github.com/vivek-nutcrackerz/react-themed-player)  

