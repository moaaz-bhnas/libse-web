import React, { memo } from 'react';
import Link from 'next/link';
import {
  StyledCategory,
  CategoryName,
  CoverContainer,
  CategoryCover,
  CategoryLink
} from '../style';

const Category = (props) => {
  const { category } = props;

  return (
    <StyledCategory>
      <Link passHref href={`/category/${category.name}`}>
        <CategoryLink>
          <CoverContainer>
            <CategoryCover className="Category__cover" src={category.cover} alt="" />
          </CoverContainer>
          <CategoryName>{category.name}</CategoryName>
        </CategoryLink>
      </Link>
      </StyledCategory>
  );
}

export default memo(Category);