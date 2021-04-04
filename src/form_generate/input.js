import {ensureAttributeExists, ensureAttributeIsFlag} from "./attributeChecks.js";

export function fillInputAttributes(node, desc) {
    validate(desc);
    node.name = desc.name;
    node.required = desc.required;
    node.className = desc.class;
    node.disabled = desc.disabled;
    if (desc.placeholder != null)
        node.placeholder = desc.placeholder;
}

function validate(desc) {
    ensureAttributeExists("name", desc.name);
    ensureAttributeIsFlag("required", desc.required);
    ensureAttributeExists("class", desc.class, true);
    ensureAttributeIsFlag("disabled", desc.disabled);
}