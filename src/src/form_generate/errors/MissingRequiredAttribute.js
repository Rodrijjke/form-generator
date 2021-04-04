export function MissingRequiredAttribute(attributeName) {
    this.message = `The description of form item does not contain required attribute '${attributeName}'`;
}