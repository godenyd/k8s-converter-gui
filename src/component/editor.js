import React from "react";
import JsonDocs from "./json-docs";
import * as converterApi from '../api/converter';
import * as templateApi from '../api/template';
import '../style/editor.css';

class Editor extends React.Component {

    constructor(props) {
        super(props);

        this.setState({
            jsonText: ''
        });
    }

    async handleConvertButtonClick(event) {

        let text = document.getElementById('jsonText').value;

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

    async handleSaveButtonClick(event) {

        let templateName = document.getElementById('templateName').value;

        let valid = await templateApi.checkTemplateName(templateName);

        if (!valid) {

            let templateJson = document.getElementById('jsonText').value;

            if (templateJson.length > 0) {
                await templateApi.saveTemplate(templateName, templateJson);
            }
        } else {
            alert("A template with this name already exists");
        }
    }

    render() {

        return (
            <div>
                <div class="row">
                    <div class="col-6">
                        <div class="row justify-content-center">
                            <form class="editor-form">
                                <fieldset>
                                    <h1>Json:</h1>
                                    <div>
                                        <textarea class="form-control editor-area" id="jsonText" name="jsonText" onChange={this.handleChange}></textarea>
                                    </div>
                                    <div>
                                        <label>Template Name:</label>
                                        <input class="form-control" type="text" name="templateName" id="templateName" />
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <div class="d-flex justify-content-end">
                            <div class="btn-group">
                                <button type="button" class="btn btn-primary btn-lg" onClick={this.handleConvertButtonClick}>Convert</button>
                                <button type="button" class="btn btn-primary btn-lg" onClick={this.handleSaveButtonClick}>Save</button>
                            </div>
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