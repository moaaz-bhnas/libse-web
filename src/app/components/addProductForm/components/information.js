import React, { memo } from 'react'
import {
  SubTitle,
  DataList,
  Option
} from '../style';
import { Input, TextArea } from '../../input/style';
import { NextButton } from '../../button';

const categories = [ 'men', 'women', 'boys', 'girls' ];
const subCategories = [ 'Pants & Jeans', 'T-Shirts & Polos', 'Slippers', 'Formal Shoes', 'Watches', 'Sunglasses', 'Accessories' ];

const Information = ({ productName, setProductName, category, setCategory, subCategory, setSubCategory, description, setDescription, onStepSubmit }) => {
  const disabled = [ productName, category, subCategory, description ].some(value => value === '');

  return (
    <>
      <SubTitle>Product Information</SubTitle>
      
      <Input 
        type="text"
        aria-label="Product name"
        placeholder="Product name"
        value={productName}
        onChange={event => setProductName(event.target.value)}
        required
      />

      <Input 
        type="text"
        aria-label="Choose category"
        placeholder="Choose category (e.g. men)"
        list="productForm__categories"
        value={category}
        onChange={event => setCategory(event.target.value)}
        required
      />
      <DataList id="productForm__categories">
        {
          categories.map(category => (
            <Option key={category} value={category} />
          ))
        }
      </DataList>

      <Input 
        type="text"
        aria-label="Choose sub category"
        placeholder="Choose sub-category (e.g. Pants & Jeans)"
        list="productForm__subCategories"
        value={subCategory}
        onChange={event => setSubCategory(event.target.value)}
        required
      />
      <DataList id="productForm__subCategories">
        {
          subCategories.map(subCategory => (
            <Option key={subCategory} value={subCategory} />
          ))
        }
      </DataList>

      <TextArea 
        aria-label="Short description"
        placeholder="Write a short description..."
        value={description}
        onChange={event => setDescription(event.target.value)}
        rows="6"
        maxLength="100"
        required
      />

      <NextButton onClick={event => onStepSubmit(event, disabled)} />
    </>
  );
}

export default memo(Information);