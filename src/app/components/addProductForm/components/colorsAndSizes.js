import { memo, useCallback, useEffect } from 'react'
import {  
  SubTitle, 
  Label, 
  InputContainer,
  RemoveButton,
  RemoveIcon,
  ButtonsContainer
} from '../style'
import { Input, ColorInput } from '../../input/style';
import Select from 'react-select';
import { NextButton, PreviousButton } from '../../button';
import removeIcon from '../../../img/remove.svg';
import ImageUploader from 'react-images-upload';

const sizeOptions = [
  { value: 'small',  label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large',  label: 'Large' },
  { value: 'xLarge', label: 'X-large' },
];

const ColorsAndSizes = ({ colors, setColors, onStepSubmit }) => {
  const handleColorChange = useCallback((event, index) => {
    const updatedColors = colors.map((color, i) => {
      if (i === index) {
        color.value = event.target.value;
      }
      return color;
    });
    setColors(updatedColors);
  }, [ colors ])

  const handleSizeChange = useCallback((selectedSizes, index) => {
    if (!selectedSizes) selectedSizes = [];
    const updatedColors = colors.map((color, i) => {
      if (i === index) {
        color.sizes = selectedSizes;
      }
      return color;
    });
    setColors(updatedColors);
  }, [ colors ]);

  const removeColor = useCallback((event, index) => {
    event.preventDefault();
    const updatedColors = 
      (colors.length === 1) ? 
        [{ value: '#000000', sizes: [], images: [] }] :
        colors.filter((color, i) => i !== index);
    setColors(updatedColors);
  }, [ colors ])

  const handleImageChange = useCallback((imageFiles, imageDataURLs, index) => {
    console.log(imageFiles, imageDataURLs);
    const updatedColors = colors.map((color, i) => {
      if (i === index) {
        color.images = imageDataURLs;
      }
      return color;
    })
    setColors(updatedColors);
  }, [ colors ])

  useEffect(function addNewColorInputIfAllInputsFilled() {
    const allInputsFilled = colors.every(({ sizes, images }) => sizes.length && images.length);
    if (allInputsFilled) {
      setColors([
        ...colors,
        { value: '#000000', sizes: [], images: [] }
      ])
    }
  }, [ colors ])

  console.log('colors: ', colors);
  const disabled = colors[0].sizes.length === 0;
  return (
    <>
      <SubTitle>Colors & Sizes</SubTitle>

      {
        colors.map((color, index) => (
          <InputContainer key={index}>
            <Label htmlFor={`productForm__color${index+1}`}>Color #{index+1}</Label>
            <ColorInput 
              id={`productForm__color${index+1}`}
              type="color"
              placeholder="e.g. blue"
              value={color.value}
              onChange={event => handleColorChange(event, index)}
              required
            />
            <Select 
              className="productForm__sizeSelect" 
              classNamePrefix="productForm__selectChild"
              value={color.sizes} 
              options={sizeOptions}
              isMulti
              isSearchable 
              placeholder="Available sizes"
              onChange={selectedSizes => handleSizeChange(selectedSizes, index)}
            />
            <ImageUploader 
              className="productForm__imageUploader"
              buttonClassName="productForm__imageUploaderButton"
              defaultImages={color.images}
              onChange={(imageFiles, imageDataURLs) => handleImageChange(imageFiles, imageDataURLs, index)}
              imgExtension={['.jpg', '.png', 'jpeg']}
              withPreview={true}
              label="Max file size: 5mb, accepted: jpg|png"
            />
            {
              ((color.sizes.length > 0) || (color.images.length > 0)) &&
              <RemoveButton onClick={(event) => removeColor(event, index)}>
                <RemoveIcon src={removeIcon} alt="remove color" />
              </RemoveButton>
            }
          </InputContainer>
        ))
      }
      <ButtonsContainer>
        <PreviousButton />
        <NextButton onClick={event => onStepSubmit(event, disabled)} />
      </ButtonsContainer>
    </>
  );
}

export default memo(ColorsAndSizes);