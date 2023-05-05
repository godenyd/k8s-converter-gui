const requestOptions = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
};

const domain = "http://localhost:8080/templates";
const templateUrl = domain + "/template"
const templatesUrl = domain + "/templates";
const checkNameUrl = domain + "/checkName";

export const checkTemplateName = async (templateName) => {

    const response = await fetch(checkNameUrl + "/" + templateName, {
        ...requestOptions,
        method: "GET"
    });

    return response.json();
}

export const getTemplateList = async () => {

    const reponse = await fetch(templatesUrl, {
        ...requestOptions,
        method: "GET"
    });

    return reponse.json();
}

export const getTemplateContents = async (templateName) => {

    const response = await fetch(templateUrl + "/" + templateName, {
        ...requestOptions,
        method: "GET"
    });

    return response.json();
}

export const saveTemplate = async (templateName, templateJson) => {

    const response = await fetch(templateUrl + "/" + templateName, {
        ...requestOptions,
        method: "POST",
        body: templateJson
    })

    return response.json();
}