export function formatDate(date) {
    if (!date) return "";
    const options = { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' }

    return date.toLocaleDateString("en-AU", options);
}
