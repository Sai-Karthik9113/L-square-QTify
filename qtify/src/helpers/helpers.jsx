export function truncate( text, maxLength ) {
    if (text.length > maxLength) {
        return text.splice(0, maxLength) + "...";
    }
    return text;
}