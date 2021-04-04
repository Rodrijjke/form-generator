import {ensureAttributeExists} from "./attributeChecks.js";

export function generateSubmitNode(desc) {
    validate(desc);
    return generate(desc);
}

function validate(desc) {
    ensureAttributeExists("class", desc.class, true);
    ensureAttributeExists("text", desc.text, true);
}

function generate(desc) {
    const inputNode = document.createElement("input");
    inputNode.type = "submit";
    inputNode.className = desc.class;
    inputNode.value = desc.text;
    return inputNode;
}