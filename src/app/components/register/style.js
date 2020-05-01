import styled from 'styled-components';
import theme from '../../shared/theme';
import { rectButton } from '../button/style';
import { title } from '../title/style';

export const Form = styled.form`
  max-width: 30em;
  padding-bottom: 2em;
`;

export const Title = styled.h2`
  ${title}
`;

export const PersonalInfo = styled.div`

`;

export const SubTitle = styled.h3`
  font-size: 1rem;
  margin: 0 0 1rem;
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Hr = styled.hr`
  margin: .5em 0 1em;
  border: .5px solid ${theme.border.grey};
`;

export const ShopInfo = styled.div`
  
`;

export const WorkingHours = styled.div`
  margin-bottom: .7em;
`;

export const InputContainer = styled.div`
  flex: 0 calc(50% - .5em);
`;

export const Label = styled.label`
  
`;

export const SubmitButton = styled.button`
  ${rectButton}
`;