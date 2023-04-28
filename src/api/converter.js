const requestOptions = {
    //credentials: "include",
    headers: {
        "Content-Type": "application/json",
        //Authorization: "Basic " + btoa("user:Almafa12"),
        Accept: "application/json"
    }
};

const domain = "http://localhost:8080/";
const convertUrl = domain + "convert";

export const convertConfig = async (configurationJson) => {

    const response = await fetch(convertUrl, {
        ...requestOptions,
        method: "POST",
        body: JSON.stringify(configurationJson)
    });

    return response.json();
}