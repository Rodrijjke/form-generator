import {fillInputAttributes} from "./input.js";
import {ensureAttributeExists} from "./attributeChecks.js";
import {WrongValidationType} from "./errors/WrongValidationType.js";

export function generateTextNode(desc) {
    ensureAttributeExists("value", desc.value, true);
    const inputNode = document.createElement("input");
    const validationType = desc.validationRules.type;
    inputNode.type = getInputType(validationType);
    inputNode.value = desc.value;
    inputNode.pattern = getPattern(validationType);
    fillInputAttributes(inputNode, desc);
    return inputNode;
}

function getInputType(validationType) {
    switch (validationType) {
        case "text":
        case "tel":
        case "email":
            return validationType;
        default:
            throw new WrongValidationType(validationType, "text");
    }
}

function getPattern(validationType) {
    switch (validationType) {
        case "tel":
            return "^[+]?[7-9]?[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$";
        default:
            return ".*";
    }
}