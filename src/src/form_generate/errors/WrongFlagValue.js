export function WrongFlagValue(flagName, value) {
    this.message = `Flag '${flagName}' should take value true or false, but received '${value}'`;
}