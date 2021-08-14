const moment = require('moment');

exports.getCurrentDate = () => {
  return{
    unix: moment().unix(),
    utc: moment(new Date()).utcOffset('+0000').format('ddd, D MMM YYYY HH:mm:ss [GMT]')
  }
}

exports.isValidDate = (value) => {
  return moment(value).isValid();
}

exports.isUnixFormat = (value) => {
  return moment.unix(value).isValid();
}

exports.formatDateToUnix = (value) =>{
  return new Date(value).getTime();
}

exports.formatDate = (value) => {
  return moment(value).utcOffset('+0000').format('ddd, D MMM YYYY HH:mm:ss [GMT]');
}