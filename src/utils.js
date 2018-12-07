//sorts the results from newest import date to oldest import date
export const getSorted = (array) => {
  return array.sort((a,b) => {
    var c = new Date(a.import_datetime);
    var d = new Date(b.import_datetime);
    return d-c
  });
}

//filters the results based on rating
export const getFiltered = (filterType, array) => {
  return filterType !== null ? array.filter(item => item.rating === filterType) : array
}