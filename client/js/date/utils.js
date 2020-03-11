const JANUARY = '01';
const FEBRUARY = '02';
const MARCH = '03';
const APRIL = '04';
const MAY = '05';
const JUNE = '06';
const JULY = '07';
const AUGUST = '08';
const SEPTEMBER = '09';
const OCTOBER = '10';
const NOVEMBER = '11';
const DECEMBER = '12';

const LEAP_YEAR_DIVISOR = 4;

const MONTHS = [
    JANUARY,
    FEBRUARY,
    MARCH,
    APRIL,
    MAY,
    JUNE,
    JULY,
    AUGUST,
    SEPTEMBER,
    OCTOBER,
    NOVEMBER,
    DECEMBER
];

// Returns an index representing the day of the week
// of the first day of the month
const findIndexOfFirstDayOfMonth = (monthIndex, year) => {
    return new Date(MONTHS[monthIndex] + '-01-' + year).getDay();
};

const getDaysOfTheMonthCount = (monthIndex, year) => {
    const [
        JANUARY,
        FEBRUARY,
        MARCH,
        APRIL,
        MAY,
        JUNE,
        JULY,
        AUGUST,
        SEPTEMBER,
        OCTOBER,
        NOVEMBER,
        DECEMBER
    ] = monthMap;

    switch (monthMap[monthIndex]) {
        case JANUARY:
        case MARCH:
        case MAY:
        case JULY:
        case AUGUST:
        case OCTOBER:
        case DECEMBER:
            return 31;
        case APRIL:
        case JUNE:
        case SEPTEMBER:
        case NOVEMBER:
            return 30;
        case FEBRUARY:
            return year % LEAP_YEAR_DIVISOR ? 28 : 29;
        default:
            return null;
    }
};

const findCalendarRowCount = (firstDayOfMonth, dayCount) => {
    return Math.ceil((firstDayOfMonth + dayCount) / 7);
};

