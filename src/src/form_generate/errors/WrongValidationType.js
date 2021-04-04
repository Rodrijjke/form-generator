export function WrongValidationType(validationType, inputType) {
    this.message = `Validation type '${validationType}' cannot be applied to ${inputType} input`;
}