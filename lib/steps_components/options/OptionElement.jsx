import styled from 'styled-components';
import defaultTheme from '../../theme';

const OptionElement = styled.button`
  background: #2979FF; // ${({ theme }) => theme.botBubbleColor}
  border: 0;
  border-radius: 15px;

  box-shadow: 1px 1px 1px 1px #ffffff;

  color: #ffffff; // ${({ theme }) => theme.botFontColor}
  display: inline-block;
  font-size: 14px;
  margin: 0 6px 6px 0;
  padding: 20px 25px;


  &:hover {
    opacity: 0.7;
  }
  &:active,
  &:hover:focus {
    outline:none;
  }
`;

OptionElement.defaultProps = {
  theme: defaultTheme
};

export default OptionElement;
