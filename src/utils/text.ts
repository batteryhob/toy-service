/**
 * 세자리 콤마
 */
 export function addComma(num: number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}