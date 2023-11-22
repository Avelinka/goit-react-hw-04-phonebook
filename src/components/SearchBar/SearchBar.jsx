import { BsSearch } from 'react-icons/bs';
import { SearchLabel, SearchWrap, SearchInput } from './SearchBar.styled';

export const SearchBar = ({ value, onChange }) => (
  <SearchLabel>
    <SearchWrap>
      <BsSearch size="16" /> Find contacts by name
    </SearchWrap>
    <SearchInput
      name="filter"
      autoComplete="off"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="search"
    />
  </SearchLabel>
);
