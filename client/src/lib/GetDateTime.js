export const getTime = () => {
    const today = new Date();
    const hour =today.getHours();
    const minute = today.getMinutes();
    const seconds = today.getSeconds();

    return {hour, minute, seconds};
};

export const getDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = today.getDay();

    switch (day) {
        case 0:
            return {year, month, date, day: '일요일'};
        case 1:
            return {year, month, date, day: '월요일'};
        case 2:
            return {year, month, date, day: '화요일'};
        case 3:
            return {year, month, date, day: '수요일'};
        case 4:
            return {year, month, date, day: '목요일'};
        case 5:
            return {year, month, date, day: '금요일'};
        case 6:
            return {year, month, date, day: '토요일'};
        default:
            return '에러 발생';
    }
};