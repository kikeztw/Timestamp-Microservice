const moment = require('moment');

exports.getCurrentDate = () => {
  return{
    unix: moment().unix(),
    utc: moment().toDate()
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
  return moment(value).toDate();
}