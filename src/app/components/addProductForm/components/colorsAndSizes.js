import { memo, useCallback, useEffect, useState } from 'react'
import {  
  SubTitle, 
  Label, 
  InputContainer,
  RemoveButton,
  RemoveIcon,
  ButtonsContainer,
  LabelContainer,
  ColorsNumber
} from '../style'
import Select from 'react-select';
import { NextButton, PreviousButton } from '../../button';
import removeIcon from '../../../img/remove.svg';
import ImageUploader from 'react-images-upload';
import { Input } from '../../input/style';

const sizeOptions = [
  { value: 'xSmall', label: 'X-small' },
  { value: 'small',  label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large',  label: 'Large' },
  { value: 'xLarge', label: 'X-large' },
];

const colorOptions = [
  { value: 'black',  label: 'Black' },
  { value: 'grey',   label: 'Grey' },
  { value: 'white',  label: 'White' },
  { value: 'brown',  label: 'Brown' },
  { value: 'beige',  label: 'Beige' },
  { value: 'red',    label: 'Red' },
  { value: 'pink',   label: 'Pink' },
  { value: 'orange', label: 'Orange' },
  { value: 'ivory',  label: 'Ivory' },
  { value: 'green',  label: 'Green' },
  { value: 'blue',   label: 'Blue' },
  { value: 'purple', label: 'Purple' },
  { value: 'gold',   label: 'Gold' },
  { value: 'silver', label: 'Silver' },
  { value: 'multi',  label: 'Multi' },
]

const ColorsAndSizes = ({ colors, setColors, onStepSubmit, goToPreviousStep }) => {
  const [ colorsNumber, setColorsNumber ] = useState(1);

  const setColorInputs = useCallback(() => {
    if (colorsNumber > colors.length) {
      const difference = colorsNumber - colors.length;
      const emptyColor = { value: '', sizes: [], images: [] }
      const newColors = Array(difference).fill(emptyColor);
      setColors(colors.concat(newColors));
    } else {
      // handle when seller fill inputs and then dcrease their number
    }
  }, [ colors, colorsNumber ]);

  useEffect(setColorInputs, [ colors, colorsNumber ]);

  const handleColorChange = useCallback((value, index) => {
    const updatedColors = colors.map((color, i) => {
      if (i === index) {
        color.value = value;
      }
      return color;
    });
    console.log(updatedColors);
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
        [{ value: '', sizes: [], images: [] }] :
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
  }, [ colors ]);

  const crossIconVisible = useCallback((index) => {
    const color = colors[index];
    return color.value || (color.sizes.length > 0) || (color.images.length > 0);
  }, [ colors ])

  console.log('colors: ', colors);
  const disabled = colors.some(color => !color.value || !color.sizes.length || !color.images.length);
  return (
    <>
      <SubTitle>Colors & Sizes</SubTitle>

      <ColorsNumber>
        <Label htmlFor="productForm__colorsNumber">Number of colors: </Label>
        <Input
          data-tiny="true"
          id="productForm__colorsNumber"
          type="number"
          value={colorsNumber}
          onChange={event => setColorsNumber(event.target.value)}
          required
          max="10"
        />
      </ColorsNumber>

      {
        colors.map((color, index) => (
          <InputContainer key={index}>
            <LabelContainer>
              <Label>Color #{index+1}</Label>
              {
                crossIconVisible(index) &&
                <RemoveButton onClick={(event) => removeColor(event, index)}>
                  <RemoveIcon src={removeIcon} alt="remove color" />
                </RemoveButton>
              }
            </LabelContainer>
            <Select 
              className="productForm__colorSelect" 
              classNamePrefix="productForm__colorSelectChild"
              value={color.value} 
              options={colorOptions}
              isSearchable 
              placeholder="Color"
              onChange={selectedColor => handleColorChange(selectedColor, index)}
            />
            <Select 
              className="productForm__sizeSelect" 
              classNamePrefix="productForm__sizeSelectChild"
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
              withIcon={false}
            />
          </InputContainer>
        ))
      }
      <ButtonsContainer>
        <PreviousButton onClick={goToPreviousStep} />
        <NextButton 
          disabled={disabled}
          onClick={event => onStepSubmit(event, disabled)}
        />
      </ButtonsContainer>
    </>
  );
}

export default memo(ColorsAndSizes);