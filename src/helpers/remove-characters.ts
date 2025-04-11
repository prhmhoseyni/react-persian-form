export default function removeCharacters(input: string): string {
    return input.replace(/[^0-9]+/g, "");
}