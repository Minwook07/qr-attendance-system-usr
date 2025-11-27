export function filterUser (data, SearchTerm, fromDate, toDate) {
    return data.filter(item => {
        const matchesSearch = 
        item.name.toLowerCase().includes(SearchTerm.toLowerCase()) ||
        item.code.toLowerCase().includes(SearchTerm.toLowerCase()) ||
        item.position.toLowerCase().includes(SearchTerm.toLowerCase())
        item.email.toLowerCase().includes(SearchTerm.toLowerCase());

        const matchesDataRange = 
        (!fromDate || item.date >= fromDate) &&
        (!toDate || item.date <= toDate);

        return matchesSearch &matchesDataRange;
    });
}