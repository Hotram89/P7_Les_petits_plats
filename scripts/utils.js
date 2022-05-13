function formatString(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

export function escapeArray(data) {
    let newData = new Set();

    data = Array.from(data).sort();
    data.forEach((el) => {
        newData.add(formatString(el));
    });

    return newData;
}
