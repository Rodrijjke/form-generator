import {generateFillerNode} from "./filler.js";
import {generateTextNode} from "./text.js";
import {generateLabelNode} from "./label.js";
import {generateTextAreaNode} from "./textArea.js";
import {generateCheckBoxNode} from "./checkBox.js";
import {generateSelectNode} from "./select.js";
import {generateRadioNode} from "./radio.js";
import {generateDivNode} from "./div.js";
import {generateSubmitNode} from "./submit.js";
import {textAreaCols, textAreaRows} from "./consts.js";

export function UnknownItemType(type) {
    this.message = `Unknown form item type '${type}'`;
}

export function generateFormItemNode(desc) {
    const type = desc.type;
    switch (type) {
        case "filler":
            return generateFillerNode(desc);
        case "text":
            return generateLabelNode(desc, () => generateTextNode(desc));
        case "textarea":
            return generateLabelNode(desc, () => generateTextAreaNode(desc, textAreaRows, textAreaCols));
        case "checkbox":
            return generateLabelNode(desc, () => generateCheckBoxNode(desc), true);
        case "select":
            return generateLabelNode(desc, () => generateSelectNode(desc), true);
        case "radio":
            return generateLabelNode(desc, getRadioParentDivGenerator(desc));
        case "button":
            return generateSubmitNode(desc);
        default:
            throw new UnknownItemType(type);
    }
}

function getRadioParentDivGenerator(desc) {
    const childGenerators = desc.items.map((_, itemIndex) => getLabledRadioGenerator(desc, itemIndex))
    return () => generateDivNode(childGenerators)
}

function getLabledRadioGenerator(desc, itemIndex) {
    const itemDesc = desc.items[itemIndex];
    return () => generateLabelNode(itemDesc, getRadioItemGenerator(desc, itemIndex), true);
}

function getRadioItemGenerator(desc, itemIndex) {
    return () => generateRadioNode(desc, itemIndex);
}