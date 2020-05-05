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
`;

export const Title = styled.h2`
  ${title}
`;

export const StyledProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 36em;
  margin-bottom: 2.5em;
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
  
  &[data-active="true"] {
    .progressbar__iconContainer {
      border-color: ${theme.bg.success};
      // background-color: #c2d9c1;
    }
  }

  &[data-finished="true"] {
    .progressbar__iconContainer {
      border-color: ${theme.bg.success};
      background-color: ${theme.bg.success};

      &::after {
        background-color: ${theme.border.success};
      }

      .svg {
        fill: #fff;
      }
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
  
export const InputContainer = styled.div`
  position: relative;

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
    margin-bottom: 1.5em;

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
    transition: opacity .1s;
    border-radius: ${measurements.borderRadius.input};

    &:hover,
    &:focus {
      background-color: ${theme.bg.accent};
      opacity: .6;
    }
  }
`;

export const DataList = styled.datalist``;

export const Option = styled.option``

export const Label = styled.label`
  
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  position: absolute;
  width: 3rem;
  right: -4em;
  top: 36%;
  border: none;
  padding: .8em;

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
`;

export const SubmitButton = styled.button`
  ${rectButton}
`;

// export const CurrencyInput = styled(CurrencyInputField)`
//   ${inputStyles}
//   width: 100%;
// `;