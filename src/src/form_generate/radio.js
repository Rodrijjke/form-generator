import {fillInputAttributes} from "./input.js";
import {ensureAttributeExists, ensureAttributeIsFlag} from "./attributeChecks.js";
import {WrongValidationType} from "./errors/WrongValidationType.js";

export function generateRadioNode(inputDesc, itemIndex) {
    const itemDesc = inputDesc.items[itemIndex];
    validate(inputDesc, itemDesc);
    const inputNode = document.createElement("input");
    fillInputAttributes(inputNode, inputDesc);
    inputNode.type = "radio";
    inputNode.value = itemDesc.value;
    inputNode.checked = itemDesc.checked;
    return inputNode;
}

function validate(inputDesc, itemDesc) {
    const inputType = "radio";
    ensureAttributeExists("value", itemDesc.value);
    ensureAttributeIsFlag("checked", itemDesc.checked);
    const validationType = inputDesc.validationRules?.type;
    if (validationType !== "radio")
        throw new WrongValidationType(validationType, inputType);
}