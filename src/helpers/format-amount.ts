export default function formatAmount(input: string | number): string {
    return Number(input)
        ? Intl.NumberFormat().format(Number(input))
        : "";
}