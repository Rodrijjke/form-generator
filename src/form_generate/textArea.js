import {fillInputAttributes} from "./input.js";
import {ensureAttributeExists} from "./attributeChecks.js";
import {WrongValidationType} from "./errors/WrongValidationType.js";

export function generateTextAreaNode(desc, rows, cols) {
    validate(desc);
    return generate(desc, rows, cols);
}

function validate(desc) {
    ensureAttributeExists("value", desc.value, true);
    const validationType = desc.validationRules?.type;
    if (validationType !== "text") {
        throw new WrongValidationType(validationType, "textarea");
    }
}

function generate(desc, rows, cols) {
    const taNode = document.createElement("textarea");
    taNode.value = desc.value;
    taNode.rows = rows;
    taNode.cols = cols;
    fillInputAttributes(taNode, desc);
    return taNode;
}