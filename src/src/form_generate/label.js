export function generateLabelNode(desc, generateChildNode, oneLine = false) {
    const labelNode = document.createElement("label");
    if (desc.label) {
        const textNode = document.createTextNode(desc.label)
        labelNode.appendChild(textNode);
        if (!oneLine) {
            const br = document.createElement("br")
            labelNode.appendChild(br);
        }
    }
    const childNode = generateChildNode();
    labelNode.appendChild(childNode);
    const divNode = document.createElement("div");
    divNode.appendChild(labelNode);
    return divNode;
}