export default function toEnglishDigits(input: string): string {
    return input.toString().replace(/[۰-۹]/g, d => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());
}