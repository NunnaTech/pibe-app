class DateService {
  parseToDate(date) { return date.split('T')[0]; }
}

export default new DateService();