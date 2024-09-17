// Two functions to handle data formating issues


export function formatToYearMonthDay(dateStr: string): string {
    const [day, month, year] = dateStr.split("/");

    // Create a new Date object
    const date = new Date(Number(year), Number(month) - 1, Number(day));

    // Format the date as yyyy-MM-dd
    const formattedDate = date.toISOString().slice(0, 10);

    return formattedDate;
}

export function formatToDayMonthYear(dateStr: string): string {
    const date = new Date(dateStr);

    // Extract the day, month, and year
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1
    const year = date.getFullYear();

    // Return the formatted date in dd/MM/yyyy format
    return `${day}/${month}/${year}`;
}