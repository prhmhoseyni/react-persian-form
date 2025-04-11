export default function toPersianDigits(input: string | number): string {
    return input.toString().replace(/[0-9]/g, w => ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"][Number(w)]);
}