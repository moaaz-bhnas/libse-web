import { memo, useCallback } from 'react'
import {
  SubTitle,
  ButtonsContainer,
  SubmitButton
} from '../style';
import { InputWithPrepending } from '../../input';
import { PreviousButton, Button } from '../../button';

const Information = ({ price, setPrice, onStepSubmit, goToPreviousStep }) => {
  const disabled = [ price ].some(value => value === '');

  const handleSubmit = useCallback((event) => {
    onStepSubmit(event, disabled);
  }, [ disabled ])

  return (
    <>
      <SubTitle>Price</SubTitle>

      <InputWithPrepending
        half
        prependingText="EGP"
        label="Price"
        placeholder="Original price (e.g. 150)"
        value={price}
        onChange={event => setPrice(Number(event.target.value))}
        required
      />

      <ButtonsContainer>
        <PreviousButton onClick={goToPreviousStep} /> 
        <SubmitButton
          type="submit"
          onClick={(event) => handleSubmit(event)}
        >
          Submit
        </SubmitButton>
      </ButtonsContainer>
    </>
  );
}

export default memo(Information);