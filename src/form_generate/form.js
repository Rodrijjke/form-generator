import {generateFormItemNode} from "./generateFormItems.js";
import {MissingRequiredElement} from "./errors/MissingRequiredElement.js";

export function generateFormNode(desc) {
    validate(desc);
    return generate(desc);
}

function validate(desc) {
    if (!desc.name)
        throw new MissingRequiredElement("name");
    if (!desc.postmessage)
        throw new MissingRequiredElement("postmessage");
    if (!desc.items)
        throw new MissingRequiredElement("items");
}

function generate(desc) {
    const formNode = document.createElement("form");
    const formName = desc.name;
    formNode.name = formName;
    formNode.id = getFormId(formName);
    formNode.method = "post";
    formNode.setAttribute("onsubmit",
        `document.getElementById('${formNode.id}').innerHTML = '${desc.postmessage}'; return false;`);
    appendChildNodes(formNode, desc.items);
    return formNode;
}

function getFormId(formName) {
    const sameNameFormsCount = document.getElementsByName(formName).length;
    return `form_${formName}_${sameNameFormsCount}`;
}

function appendChildNodes(formNode, itemDescs) {
    if (!itemDescs.length)
        return;
    for (let i = 0; i < itemDescs.length; ++i) {
        const itemDesc = itemDescs[i];
        const itemNode = generateFormItemNode(itemDesc);
        formNode.appendChild(itemNode);
    }
}