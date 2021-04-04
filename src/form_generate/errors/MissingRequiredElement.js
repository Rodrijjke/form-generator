export function MissingRequiredElement(elementName) {
    this.message = `Form description does not contain required element ${elementName}`;
}