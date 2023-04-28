import React from "react";
import JsonDocs from "./json-docs";
import * as converterApi from '../api/converter';
import '../style/editor.css';

class Editor extends React.Component {

    constructor(props) {
        super(props);

        this.setState({
            jsonText: ''
        });
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
                <div class="row">
                    <div class="col-6">
                        <div class="row justify-content-center">
                            <form>
                                <h1>Json:</h1>
                                <div>
                                    <textarea class="form-control editor-area" id="jsonText" name="jsonText" onChange={this.handleChange}></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button type="button" class="btn btn-primary btn-lg" onClick={this.handleButtonClick}>Convert</button>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="row justify-content-center">
                            <h1>Output:</h1>
                            <textarea class="form-control editor-area" id="output" name="output" disabled></textarea>
                        </div>
                    </div>
                </div>
                <JsonDocs />
            </div>
        );
    }
}

export default Editor;