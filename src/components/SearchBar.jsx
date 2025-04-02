const SearchBar = ({ onSearch }) => {
  return (
    <input type="text" placeholder="Search cakes..." onChange={(e) => onSearch(e.target.value)} />
  );
};

export default SearchBar;
