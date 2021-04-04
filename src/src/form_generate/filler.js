import {ensureAttributeExists} from "./attributeChecks.js";

export function generateFillerNode(desc) {
    const divNode = document.createElement("div");
    ensureAttributeExists("message", desc.message, true);
    divNode.innerHTML = desc.message;
    return divNode;
}