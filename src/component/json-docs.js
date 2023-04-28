import React from "react";

class JsonDocs extends React.Component {

    render() {

        const exampleJson = "{\r\n    \"service-name\": \"database\",\r\n    \"image\": \"postgres:12\",\r\n    \"env\": {\r\n        \"POSTGRES_USER\": \"lportal\",\r\n        \"POSTGRES_DB\": \"lportal\",\r\n        \"POSTGRES_PASSWORD\": \"bHBvcnRhbA==\"\r\n    },\r\n    \"volumes\": [\"/var/lib/postgresql/data\"],\r\n    \"ports\": [\"5432\"]\r\n}";

        return (
            <div class="row">
                <h2 class="text-uppercase">json structure description</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Key</th>
                            <th scope="col">Value</th>
                            <th scope="col">Required</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">service-name</th>
                            <td>Name of the service</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <th scope="row">image</th>
                            <td>The name of the docker image that should be used. Eg.: <mark>postgres:12</mark></td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <th scope="row">env</th>
                            <td>A JSON object of the environment variables that should be added to the yaml. For example DB connection or Liferay portal-ext properties</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <th scope="row">volumes</th>
                            <td>An array of paths that should be mounted as a volume. </td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <th scope="row">ports</th>
                            <td>An array of ports that has to be exposed in the service</td>
                            <td>Yes</td>
                        </tr>
                    </tbody>
                </table>

                <h2 class="text-uppercase">example:</h2>
                <div class="example-box">
                    <textarea class="form-control example-box" disabled value={exampleJson}></textarea>
                </div>
            </div>
        );
    }
}

export default JsonDocs;