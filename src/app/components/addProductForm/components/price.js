import { memo, useCallback } from 'react'
import {
  SubTitle,
  ButtonsContainer,
  SubmitButton
} from '../style';
import { InputWithPrepending } from '../../input';
import { PreviousButton, Button } from '../../button';

const Information = ({ price, setPrice, onSubmit, goToPreviousStep }) => {
  return (
    <>
      <SubTitle>Price</SubTitle>

      <InputWithPrepending
        half
        prependingText="EGP"
        label="Price"
        placeholder="Price (e.g. 150)"
        min="1"
        value={price}
        onChange={event => setPrice(Number(event.target.value))}
        required
      />

      <ButtonsContainer>
        <PreviousButton onClick={goToPreviousStep} /> 
        <SubmitButton
          type="submit"
          onClick={onSubmit}
        >
          Submit
        </SubmitButton>
      </ButtonsContainer>
    </>
  );
}

export default memo(Information);