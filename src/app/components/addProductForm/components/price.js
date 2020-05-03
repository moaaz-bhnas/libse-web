import { memo, useCallback } from 'react'
import {
  SubTitle,
  DataList,
  Option
} from '../style';
import { Input } from '../../input/style';
import { PreviousButton } from '../../button';

const Information = ({ price, setPrice, salePrice, setSalePrice }) => {
  // const disabled = [ productName, category, subCategory, description ].some(value => value === '');

  const handlePriceChange = useCallback(({ target: { value: price } }) => {
    console.log(inputIsNumber(price));
  }, []);

  const inputIsNumber = useCallback((input) => {
    const regex = /^\d+$/;
    return regex.test(input);
  }, [])

  return (
    <>
      <SubTitle>Price</SubTitle>
      
      <Input 
        type="text"
        aria-label="Add price"
        placeholder="price"
        value={price}
        onChange={handlePriceChange}
        required
      />
    </>
  );
}

export default memo(Information);