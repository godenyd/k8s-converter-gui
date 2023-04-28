import React from "react";
import * as converterApi from '../api/converter';

class Editor extends React.Component {

    constructor(props) {
        super(props);

        this.setState({
            jsonText: ''
        });
    }

    handleChange(event) {
        var json = event.target.value;

        var validJson = "";

        try {
            validJson = JSON.parse(json);
        } catch (error) {
            validJson = null;
        }
    }

    async handleButtonClick(event) {

        var text = document.getElementById('jsonText').value;

        try {
            text = JSON.parse(text);
        } catch (error) {
            console.log("json was invalid");
            return;
        }

        let outputArea = document.getElementById('output');
        //let output = converterApi.convertConfig(text);
    
        converterApi.convertConfig(text).then(data => outputArea.value = data.configuration);
    }

    render() {

        return (
            <div>
                <form>
                    <label>
                        Json:
                        <textarea id="jsonText" name="jsonText" onChange={this.handleChange}></textarea>
                    </label>
                    <label>output:
                        <textarea id="output" name="output"></textarea>
                    </label>
                </form>
                <button onClick={this.handleButtonClick}>Convert</button>
            </div>
        );
    }
}

export default Editor;