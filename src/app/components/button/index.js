import { memo } from 'react';
import Link from 'next/link';
import {
  AddProduct, 
  AddIcon,
  Button,
  NextIcon,
  PreviousIcon
} from './style';
import addIcon from '../../img/add.svg';
import nextIcon from '../../img/next.svg';
import previousIcon from '../../img/previous.svg';

export const AddProductButton = () => {
  return (
    <Link href={`/seller/add-product`} passHref>
      <AddProduct>
        <AddIcon src={addIcon} alt="" />
        Add product
      </AddProduct>
    </Link>
  );
}

export const NextButton = ({ onClick }) => {
  return (
    <Button 
      type="submit"
      onClick={onClick}
    >
      Next
      <NextIcon src={nextIcon} alt="" />
    </Button>
  );
}

export const PreviousButton = ({ onClick }) => {
  return (
    <Button 
      type="submit"
      onClick={onClick}
    >
      <PreviousIcon src={previousIcon} alt="" />
      Prev
    </Button>
  );
}

// export const Button = ({ type, value, onClick }) => {
//   return (
//     <Button 
//       type={type}
//       onClick={onClick}
//     >
//       {value}
//     </Button>
//   );
// }
