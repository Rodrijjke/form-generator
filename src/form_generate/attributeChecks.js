import {MissingRequiredAttribute} from "./errors/MissingRequiredAttribute.js";
import {WrongFlagValue} from "./errors/WrongFlagValue.js";

export function ensureAttributeIsFlag(attributeName, attributeValue) {
    if (attributeValue === "true" || attributeValue === "false" || typeof attributeValue == "boolean")
        return;
    throw new WrongFlagValue(attributeName, attributeValue);
}

export function ensureAttributeExists(attributeName, attributeValue, canBeEmpty = false) {
    if (canBeEmpty && attributeValue === "")
        return;
    if (!attributeValue)
        throw new MissingRequiredAttribute(attributeName);
}