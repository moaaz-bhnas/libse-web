import styled, { css } from 'styled-components';
import theme from '../../shared/theme';
import measurements from '../../shared/measurements';

export const inputStyles = css`
  font-size: 1rem;
  border: 1px solid ${theme.border.grey};
  padding: .7em .6em;
  border-radius: ${measurements.borderRadius.input};
`;

export const Input = styled.input`
  ${inputStyles}
  width: ${({ half }) => half ? 'calc(50% - .5em)' : '100%'};
  margin-bottom: .8em;
`;

export const TextArea = styled.textarea`
  font-size: 1rem;
  border: 1px solid ${theme.border.grey};
  margin-bottom: .8em;
  padding: .7em .6em;
  width: 100%;
  border-radius: ${measurements.borderRadius.input};
`;

export const InputContainer = styled.div`
  display: flex;
  margin-bottom: .8em;
`;

export const StyledInputWithPrepending = styled.input`
  ${inputStyles}
  flex: 1;
  width: 100%;
`;

export const Prepending = styled.span`
  color: #66;
  background-color: #E9ECEF;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  border-right: none;
  flex: 0 0 2.6em;
`;