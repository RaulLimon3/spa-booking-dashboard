const formatHour = (hour) => {
    const [hours, minutes] = hour.split(':');
    const parseHour = Number(hours);
    const period = parseHour >= 12 ? 'p.m' : 'a.m';
    const formattedHour = parseHour % 12 || 12;
    return `${formattedHour}:${minutes} ${period}`;
}

export { formatHour };