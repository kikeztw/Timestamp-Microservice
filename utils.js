exports.time = (value) =>{
    const givenDate = value;
    let date;
   // check if no date provided
   if (!givenDate) {
    date = new Date();
  } else {
    // check if unix time:
    //    number string multiplied by 1 gives this number, data string gives NaN
    const checkUnix = givenDate * 1;
    date = isNaN(checkUnix) ? new Date(givenDate) : new Date(checkUnix);
  }

  //check if valid format
  if (date == "Invalid Date") {
    return { error: "Invalid Date" };
  } else {
    const unix = date.getTime();
    const utc = date.toUTCString();
    return{ unix, utc };
  }
}