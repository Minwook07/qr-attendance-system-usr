export function formatDate({ date, optionsType = "display" }) {
    if (!date) return "";
    
    if (optionsType == "display") {
        const options = { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' }

        return date.toLocaleDateString("en-AU", options);

    } else if (optionsType == "raw") {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        return `${year}-${month}-${day}`;
    }
}
