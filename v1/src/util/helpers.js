const createSearchQuery = (query) => {
   // standard filter "kein"
  // => tag, nächster eventDate, city, host, title
  const searchQuery = Object.keys(query).reduce((obj, key) => {
    if(key === 'city'){
      obj[`location.city`] = query[key];
      return obj;
    }

    if(key === 'day'){
      const queryDayRegExp = new RegExp(`${query[key]}.`);
      // console.log(queryDayRegExp);
      obj['eventDate'] = {$in: [queryDayRegExp]}
      return obj;
    }

    if(key === 'month'){
      const currentYear = new Date().getFullYear();
      const queryMonthRegExp = new RegExp(`.${query[key]}.${currentYear}`);
      // console.log(queryMonthRegExp);
      obj['eventDate'] = {$in: [queryMonthRegExp]}
      return obj;
    }

    if(key === 'year'){
      const queryYearRegExp = new RegExp(`.${query[key]}`);
      // console.log(queryYearRegExp);
      obj['eventDate'] = {$in: [queryYearRegExp]}
      return obj;
    }
    
    if(key !== 'limit' || key !== 'page'){
      obj[key] = query[key];
      return obj;
    }


    return obj;
  },{});

  return searchQuery;
}

const pageSkip = (query) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 20;
  const skip = (page-1) * limit;

  return {
    limit,
    skip
  }
}

export {
  createSearchQuery,
  pageSkip
}