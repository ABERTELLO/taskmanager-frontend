const twoChars = (value: string): string => {
    return (value.length === 1) ? '0' + value : value;
};

const ddmmyyyy = (unformattedDate: Date | null): string => {
    if (!unformattedDate) return ''
    const date = new Date(unformattedDate);
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString();
    const day = date.getDate().toString();
    const fixedDay = twoChars(day);
    const fixedMonth = twoChars(month);
    const formattedDate = fixedDay + '/' + fixedMonth + '/' + year;
    return formattedDate;
};

const yyyymmddhhmmss = (unformattedDate: Date | null): string => {
    if (!unformattedDate) return ''
    const date = new Date(unformattedDate);
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString();
    const day = date.getDate().toString();
    const hour = date.getHours().toString();
    const minutes = date.getMinutes().toString();
    const seconds = date.getSeconds().toString();
    const formattedDate = year + twoChars(month) + twoChars(day) + twoChars(hour) + twoChars(minutes) + twoChars(seconds);
    return formattedDate;
};

const yyyymmddhhmmssToDate = (stringDate: string | null): Date | void => {
    if (!stringDate) return
    const formattedDate = new Date(
        parseInt(stringDate.slice(0, 4)),
        parseInt(stringDate.slice(4, 6)) - 1,
        parseInt(stringDate.slice(6, 8)),
        parseInt(stringDate.slice(8, 10)),
        parseInt(stringDate.slice(10, 12)),
        parseInt(stringDate.slice(12, 14))
    );
    return formattedDate;
};

const dateHelper = {
    ddmmyyyy,
    yyyymmddhhmmss,
    yyyymmddhhmmssToDate
};

export default dateHelper;