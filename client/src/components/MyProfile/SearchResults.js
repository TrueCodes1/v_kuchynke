const SearchResults = ({ results }) => {
  return (
    <>
      {results.map((result) => (
        <p>{result.item.name}</p>
      ))}
    </>
  );
};

export default SearchResults;
