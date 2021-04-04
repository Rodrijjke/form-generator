export function generateDivNode(childNodeGenerators) {
    const divNode = document.createElement("div");
    if (!childNodeGenerators.length)
        return divNode;
    for(let i = 0; i < childNodeGenerators.length; ++i) {
        const generateChildNode = childNodeGenerators[i];
        const childNode = generateChildNode();
        divNode.appendChild(childNode);
    }
    return divNode;
}