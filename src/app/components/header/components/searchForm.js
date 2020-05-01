import { memo } from 'react';
import {
  StyledSearchForm,
  SearchBtn,
  SearchIcon,
  SearchInput
} from '../style';
import searchIcon from '../../../img/search.svg';

const SearchForm = () => {
  return (
    <StyledSearchForm>
      <SearchInput type="search" placeholder="Search all products..." aria-label="Search" />

      <SearchBtn type="submit">
        <SearchIcon src={searchIcon} alt="Search" />
      </SearchBtn>
    </StyledSearchForm>
  );
}

export default memo(SearchForm);
