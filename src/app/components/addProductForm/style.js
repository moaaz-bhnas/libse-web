import styled from 'styled-components';
import { title } from '../title/style';
import theme from '../../shared/theme';
import measurements from '../../shared/measurements';
import { rectButton } from '../button/style';
// import CurrencyInputField from 'react-currency-input-field';
// import { inputStyles } from '../input/style';

export const Form = styled.form`
  margin-left: 2em;
`;

export const FormContainer = styled.div`
  max-width: 25em;
  padding-bottom: 1em;

  &[data-full-page="true"] {
    max-width: 52em;
  }
`;

export const Title = styled.h2`
  ${title}
`;

export const ProgressBarContainer = styled.div`
  width: 36em;
  margin-bottom: 2.5em;
`;

export const StyledProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Step = styled.div`
  flex: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:last-child {
    .progressbar__iconContainer::after {
      display: none;
    }
  }
  
  &[data-opened="true"] {
    .progressbar__iconContainer {
      border-color: ${theme.bg.darkGrey};
      background-color: ${theme.bg.darkGrey};
    }

    .svg {
      fill: #fff;
    }
  }
  `;

const borderColor = '#afaead';

export const StepIconButton = styled.button`
  width: 3em;
  height: 3em;
  padding: .6em;
  border-radius: 50%;
  background-color: #f0f0ef;
  border: 2px solid ${borderColor};
  position: relative;
  transition-property: border-color, background-color;
  transition-duration: .2s;
  
  .svg {
    width: 100%;
    fill: #646463;
  }
  
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 14em;
    height: 2px;
    background-color: ${borderColor};
    top: 50%;
    left: 2.5em;
    transform: translate(0, -50%);
    transition: background-color .2s;
  }
`;
  
export const StepText = styled.p`
  text-transform: capitalize;
`;
  
export const SubTitle = styled.h3`
  font-size: 1.3rem;
`;

export const ColorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
  
export const InputContainer = styled.div`
  position: relative;
  flex: 0 1 25em;

  .inputContainer__errMsg {
    margin: -.2em 0 .65em;
  }

  .productForm__sizeSelect,
  .productForm__colorSelect {
    margin-bottom: .65em;
  }

  .productForm__sizeSelectChild__control,
  .productForm__colorSelectChild__control {
    border: 1px solid ${theme.border.grey};
    border-radius: ${measurements.borderRadius.input};
  }

  .productForm__imageUploader {
    margin-bottom: .65em;

    .fileContainer {
      box-shadow: none;
      border: 1px solid ${theme.border.grey};
      border-radius: ${measurements.borderRadius.input};
    }

    .deleteImage {
      background-color: ${theme.bg.accent};
    }
  }

  .productForm__imageUploaderButton {
    background-color: ${theme.bg.accent};
    transition-property: box-shadow, background-color;
    transition-duration: .15s;
    border-radius: ${measurements.borderRadius.input};
    display: flex;
    align-items: center;

    &:hover {
      background-color: #c2715f;
    }
  
    &:focus {
      outline: none;
      box-shadow: 0 0 0 0.2rem rgba(215, 126, 106, .5);
    }

    &::after {
      content: '↥';
      display: inline-block;
      margin-left: .5em;
      font-size: 1.5em;
    }
  }

  .productForm__colorSelectChild__placeholder {
    color: #686868;
  }
`;

export const DataList = styled.datalist``;

export const Option = styled.option``;

export const ColorsNumber = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
`;

export const LabelContainer = styled.div`
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.label`
  
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  width: 3em;
  border: none;
  padding: .9em;
  margin-right: -.9em;

  &:hover {
    opacity: .6;
  }
`;

export const RemoveIcon = styled.img`
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: .85em;
`;

export const SubmitButton = styled.button`
  ${rectButton}
`;

export const ErrorMsg = styled.p`
  margin: 0;
  color: ${theme.text.warning};
  
  display: flex;
  align-items: center;

  &.progressbar__errMsg {
    position: absolute;
  }
`;

export const ErrorIcon = styled.img`
  width: 1em;
  margin-left: .5em;
`;

// export const CurrencyInput = styled(CurrencyInputField)`
//   ${inputStyles}
//   width: 100%;
// `;