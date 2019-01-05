const days = {
    MONDAY: 'monday',
    TUESDAY: 'tuesday',
    WEDNESDAY: 'wednesday',
    THURSDAY: 'thursday',
    FRIDAY: 'friday',
    SATURDAY: 'saturday',
    SUNDAY: 'sunday'
};

const dayAbbreviations = {
    [days.MONDAY]: 'Mon',
    [days.TUESDAY]: 'Tue',
    [days.WEDNESDAY]: 'Wed',
    [days.THURSDAY]: 'Thu',
    [days.FRIDAY]: 'Fri',
    [days.SATURDAY]: 'Sat',
    [days.SUNDAY]: 'Sun'
};

export const tableData = [
    {
        day: dayAbbreviations[days.SUNDAY]
    },
    {
        day: dayAbbreviations[days.MONDAY]
    },
    {
        day: dayAbbreviations[days.TUESDAY]
    },
    {
        day: dayAbbreviations[days.WEDNESDAY]
    },
    {
        day: dayAbbreviations[days.THURSDAY]
    },
    {
        day: dayAbbreviations[days.FRIDAY]
    },
    {
        day: dayAbbreviations[days.SATURDAY]
    }
];

export const weatherIcons = {
    PARTLY_SUNNY: '',
    SUN: ''
};