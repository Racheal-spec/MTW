export const SearchArray = (array, keyword) => {
  const searchItem = keyword.toLowerCase();
  return array.filter((value) => {
    return (
      value.name.toLowerCase().match(new RegExp(searchItem, "g")) ||
      value.country.toLowerCase().match(new RegExp(searchItem, "g")) ||
      value.state.toLowerCase().match(new RegExp(searchItem, "g")) ||
      value.city.toLowerCase().match(new RegExp(searchItem, "g")) ||
      value.website.toLowerCase().match(new RegExp(searchItem, "g"))
    );
  });
};

export const ProductSearchArray = (array, keyword) => {
  const searchItem = keyword.toLowerCase();
  return array.filter((value) => {
    return (
      value.item.toLowerCase().match(new RegExp(searchItem, "g")) ||
      value.unit.toLowerCase().match(new RegExp(searchItem, "g")) ||
      value.partno.toLowerCase().match(new RegExp(searchItem, "g"))
    );
  });
};
