import React from "react";

import Editor from './editor';

class App extends React.Component {

    render() {

        return (
            <div class="main-container">
                <div class="row justify-content-center">
                    <div class="col-6">
                        <Editor />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;