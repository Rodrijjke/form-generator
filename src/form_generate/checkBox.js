import {fillInputAttributes} from "./input.js";
import {ensureAttributeIsFlag} from "./attributeChecks.js";
import {WrongValidationType} from "./errors/WrongValidationType.js";

export function generateCheckBoxNode(desc) {
    validate(desc);
    return generate(desc);
}

function validate(desc) {
    ensureAttributeIsFlag("checked", desc.checked);
    const validationType = desc.validationRules?.type;
    if (validationType !== "checkbox")
        throw new WrongValidationType(validationType, "checkbox");
}

function generate(desc) {
    const cbNode = document.createElement("input");
    fillInputAttributes(cbNode, desc);
    cbNode.type = "checkbox";
    cbNode.checked = desc.checked;
    return cbNode;
}