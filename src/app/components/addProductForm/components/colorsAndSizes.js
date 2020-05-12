import { memo, useCallback, useState } from 'react'
import {  
  SubTitle, 
  Label, 
  InputContainer,
  RemoveButton,
  RemoveIcon,
  ButtonsContainer,
  LabelContainer,
  ColorsNumber,
  ColorsContainer,
  ErrorMsg,
  ErrorIcon
} from '../style'
import Select from 'react-select';
import { NextButton, PreviousButton } from '../../button';
import removeIcon from '../../../img/remove.svg';
import ImageUploader from 'react-images-upload';
import { Input } from '../../input/style';
import errorIcon from '../../../img/error.svg';

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
];

const ColorsAndSizes = ({ colors, setColors, onStepSubmit, goToPreviousStep }) => {
  const [ colorsNumber, setColorsNumber ] = useState(1);
  const [ colorsNumberError, setColorsNumberError ] = useState({ visible: false, colorsToClear: 0 });
  const [ colorError, setColorError ] = useState({ visible: false, index: null });
  const [ sizeError, setSizeError ] = useState({ visible: false, index: null });
  const [ imageError, setImageError ] = useState({ visible: false, index: null });

  const handleColorsNumberChange = useCallback(({ target: { value: newNumber } }) => {
    if (newNumber > colorsNumber) {
      addColorInputs(newNumber);
    } else if (newNumber < colorsNumber) {
      removeColorInputs(newNumber);
    }
  }, [ colors, colorsNumber ]);

  const addColorInputs = useCallback((newNumber) => {
    setColorsNumber(newNumber);
    const difference = newNumber - colors.length;
    const emptyColor = { value: '', sizes: [], images: [] };
    const newColors = Array(difference).fill(emptyColor);
    setColors(colors.concat(newColors));
  }, [ colors, colorsNumber ]);

  const removeColorInputs = useCallback((newNumber) => {
    const difference = colors.length - newNumber;
    const emptyColors = colors.filter(color => 
      color.value === '' && 
      color.sizes.length === 0 && 
      color.images.length === 0
    ).length;
    const colorHasToBeCleared = difference > emptyColors;
    const unremovableColors = colorHasToBeCleared ? difference - emptyColors : 0;
    if (colorHasToBeCleared) {
      setColorsNumberError({ visible: true, colorsToClear: unremovableColors });
      setTimeout(function clearError() {
        setColorsNumberError({ visible: false, colorsToClear: 0 });
      }, 10000);
    }
    setColorsNumber(Number(newNumber) + Number(unremovableColors));
    let removedColors = 0;
    const newColors = colors.filter((color) => {
      if (colorIsEmpty(color) && (removedColors < difference)) {
        removedColors++;
        return false;
      } else {
        return true;
      }
    })
    setColors(newColors);
  }, [ colors, colorsNumber ]);

  const colorIsEmpty = useCallback((color) => {
    return (color.value === '') && (color.sizes.length === 0) && (color.images.length === 0);
  }, []);

  const handleColorChange = useCallback((value, index) => {
    if (value) setColorError({ visible: false, index: null });

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
    if (selectedSizes) {
      setSizeError({ visible: false, index: null });
    } else {
      selectedSizes = [];
    }

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
    setColorsNumberError({ visible: false, colorsToClear: 0 });
    const isLastColor = colors.length === 1;
    const updatedColors = 
      isLastColor ? 
        [{ value: '', sizes: [], images: [] }] :
        colors.filter((color, i) => i !== index);
    setColors(updatedColors);
    if (!isLastColor) {
      setColorsNumber(colorsNumber-1)
    }
  }, [ colors, colorsNumber ])

  const handleImageChange = useCallback((imageFiles, imageDataURLs, index) => {
    setImageError({ visible: false, index: null });
    const images = imageFiles && imageFiles.map((file, index) => {
      return { file, dataURL: imageDataURLs[index] }
    });
    console.log('images: ', images);

    const updatedColors = colors.map((color, i) => {
      if (i === index) {
        color.images = images;
      }
      return color;
    })
    setColors(updatedColors);
  }, [ colors ]);

  const crossIconVisible = useCallback((index) => {
    const color = colors[index];
    return color.value || (color.sizes.length > 0) || (color.images.length > 0);
  }, [ colors ]);

  const disabled = colors.some(color => !color.value || !color.sizes.length || !color.images.length);
  const handleSubmit = useCallback((event) => {
    onStepSubmit(event, disabled);

    colors.forEach((color, index) => {
      if (color.value === '') {
        setColorError({ visible: true, index });
      } else if (color.sizes.length === 0) {
        setSizeError({ visible: true, index });
      } else if (color.images.length === 0) {
        setImageError({ visible: true, index });
      }
    });
  }, [ disabled ]);

  console.log('colors: ', colors);
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
          onChange={handleColorsNumberChange}
          required
          min="1"
          max="10"
        />
      </ColorsNumber>
      { colorsNumberError.visible && <ErrorMsg role="alert">
        You must clear {colorsNumberError.colorsToClear} of the filled colors
        <ErrorIcon src={errorIcon} alt="" />
      </ErrorMsg> }

      <ColorsContainer>
        {
          colors.map((color, index) => (
            <InputContainer key={index}>
              <LabelContainer>
                <Label>Color #{index+1}</Label>
                {
                  crossIconVisible(index) &&
                  <RemoveButton 
                    type="button"
                    onClick={(event) => removeColor(event, index)}
                  >
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
              {(colorError.visible && colorError.index===index) && <ErrorMsg className="inputContainer__errMsg" role="alert">
                Please choose a color 
                <ErrorIcon src={errorIcon} alt="" />
              </ErrorMsg>}

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
              {(sizeError.visible && sizeError.index===index) && <ErrorMsg className="inputContainer__errMsg" role="alert">
                Please choose at least one size 
                <ErrorIcon src={errorIcon} alt="" />
              </ErrorMsg>}

              <ImageUploader 
                className="productForm__imageUploader"
                buttonClassName="productForm__imageUploaderButton"
                defaultImages={color.images.map(image => image.dataURL)}
                onChange={(imageFiles, imageDataURLs) => handleImageChange(imageFiles, imageDataURLs, index)}
                imgExtension={['.jpg', '.png', '.jpeg']}
                withPreview={true}
                label="Max file size: 5mb, accepted: jpg|png"
                withIcon={false}
                buttonText="Choose image"
              />
              {(imageError.visible && imageError.index===index) && <ErrorMsg className="inputContainer__errMsg" role="alert">
                Please choose at least one image 
                <ErrorIcon src={errorIcon} alt="" />
              </ErrorMsg>}
            </InputContainer>
          ))
        }
      </ColorsContainer>

      <ButtonsContainer>
        <PreviousButton onClick={goToPreviousStep} />
        <NextButton 
          disabled={disabled}
          onClick={handleSubmit}
          positionedAbsolutely={colors.length === 1}
        />
      </ButtonsContainer>
    </>
  );
}

export default memo(ColorsAndSizes);