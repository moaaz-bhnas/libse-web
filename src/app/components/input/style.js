import styled from 'styled-components';
import theme from '../../shared/theme';
import measurements from '../../shared/measurements';

export const Input = styled.input`
  font-size: 1rem;
  border: 1px solid ${theme.border.grey};
  margin-bottom: .8em;
  padding: .7em .6em;
  width: ${({ half }) => half ? 'calc(50% - .5em)' : '100%'};
  border-radius: ${measurements.borderRadius.input};
`;

export const TextArea = styled.textarea`
  font-size: 1rem;
  border: 1px solid ${theme.border.grey};
  margin-bottom: .8em;
  padding: .7em .6em;
  width: 100%;
  border-radius: ${measurements.borderRadius.input};
`;