import './App.css';
import React from 'react'
import Player from '../index'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', url: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleKeyPress(event) {
        if (event.code == "Enter" || event.key == "Enter") {
            this.setState({url: this.state.value})
        }
    }


    render() {
        return (
            <div className="App">
                <div className="Section">
                    <div className="form_group field">
                        <input type="input" className="form_field" placeholder="Name" name="Link" id='name'
                               value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress}
                               required/>
                        <label htmlFor="name" className="form__label">Link</label>
                    </div>
                    <br/>
                    {this.state.url.length > 0 &&
                    <Player url={this.state.url}
                            style={{"left": "25%"}}
                            width={"50%"}
                            height={"50%"}
                            playing={false}
                            metadata={{
                                title: "Title",
                                subtitle: "subtitle"
                            }}
                            theme={{
                                bgColor: "#000000",
                                textColor: "#ffffff",
                                topBarHeight: "70px",
                                bottomBarHeight: "50px",
                                highlightColor: "#ff0000"
                            }}/>
                    }
                </div>
            </div>
        );
    }
}

export default App;
