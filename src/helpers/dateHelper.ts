const twoCharsPattern = (value: string): string => {
    return (value.length === 1) ? '0' + value : value;
};

const localFormat = (unformattedDate: Date | null): string => {
    if (!unformattedDate) return ''
    const date = new Date(unformattedDate);
    const year = date.getFullYear().toString();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const fixedDay = (day < 10) ? '0' + day.toString() : day.toString();
    const fixedMonth = (month < 10) ? '0' + month.toString() : month.toString();
    const formattedDate = fixedDay + '/' + fixedMonth + '/' + year;
    return formattedDate;
};

const objDateFormat = (stringDate: string | null): Date | void => {
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

const paramsFormat = (unformattedDate: Date | null): string => {
    if (!unformattedDate) return ''
    const date = new Date(unformattedDate);
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString();
    const day = date.getDate().toString();
    const hour = date.getHours().toString();
    const minutes = date.getMinutes().toString();
    const seconds = date.getSeconds().toString();
    const formattedDate = year + twoCharsPattern(month) + twoCharsPattern(day) + twoCharsPattern(hour) + twoCharsPattern(minutes) + twoCharsPattern(seconds);
    return formattedDate;
};

const dateHelper = {
    localFormat,
    objDateFormat,
    paramsFormat
};

export default dateHelper;