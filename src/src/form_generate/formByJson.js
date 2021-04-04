import {generateFormNode} from "./form.js";
import {MissingRequiredElement} from "./errors/MissingRequiredElement.js";

export function generateFormNodeByJson(json) {
    const deserialized = JSON.parse(json);
    const formDesc = deserialized.form;
    if (formDesc == null)
        throw new MissingRequiredElement("form");
    return generateFormNode(formDesc);
}