import {
  InputContainer,
  StyledInputWithPrepending,
  Prepending
} from './style';

export const InputWithPrepending = ({ half, prependingText, label, placeholder, value, onChange, required }) => {
  return (
    <InputContainer>
      <Prepending>{prependingText}</Prepending>
      <StyledInputWithPrepending 
        type="number"
        aria-label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </InputContainer>
  );
}