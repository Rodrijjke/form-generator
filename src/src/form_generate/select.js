import {fillInputAttributes} from "./input.js";
import {ensureAttributeExists, ensureAttributeIsFlag} from "./attributeChecks.js";
import {WrongValidationType} from "./errors/WrongValidationType.js";

export function generateSelectNode(desc) {
    validate(desc);
    const selectNode = document.createElement("input");
    fillInputAttributes(selectNode, desc);
    selectNode.type = "select";
    appendOptionNodes(selectNode, desc.options);
    return selectNode;
}

function validate(desc) {
    const validationType = desc.validationRules?.type;
    if (validationType !== "select") {
        throw new WrongValidationType(validationType, "select");
    }
}

function appendOptionNodes(selectNode, optionDescs) {
    for (let i = 0; i < optionDescs; ++i) {
        const optionDesc = optionDescs[i];
        validateOption(optionDesc);
        const optionNode = document.createElement("option");
        optionNode.value = optionDesc.value;
        optionNode.selected = optionDesc.selected;
        const textNode = document.createTextNode(optionDesc.text);
        optionNode.appendChild(textNode);
        selectNode.appendChild(optionNode);
    }
}

function validateOption(optionDesc) {
    ensureAttributeExists("value", optionDesc.value);
    ensureAttributeIsFlag("selected", optionDesc.selected);
    ensureAttributeExists("text", optionDesc.text, true);
}