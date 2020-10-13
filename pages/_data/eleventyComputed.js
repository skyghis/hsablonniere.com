const dtfLong = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: 'numeric' });
const dtfShort = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: 'numeric' });

module.exports = {
  formattedDate: (data) => dtfLong.format(data.page.date),
  shortDate: (data) => dtfShort.format(data.page.date),
};
