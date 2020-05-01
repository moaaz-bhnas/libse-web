import { memo } from 'react';
import Link from 'next/link';
import {
  StyledCategories, 
  Category,
  CategoryLink
} from '../style';

const categories = ['men', 'women', 'boys', 'girls'];

const Categories = () => {
  return (
    <StyledCategories>
      {categories.map((category, index) => (
        <Category key={index}>
          <Link href="/category" passHref>
            <CategoryLink className="headerBottomBar__categoryLink">{category}</CategoryLink>
          </Link>
        </Category>
      ))}
    </StyledCategories>
  );
}

export default memo(Categories);