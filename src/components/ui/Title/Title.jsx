import styled from "styled-components";

const StyledTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing.spacing400};
  font-size: ${({ theme }) => theme.textPresets.preset1.fontSize};
  font-weight: ${({ theme }) => theme.textPresets.preset1.fontWeight};
  line-height: ${({ theme }) => theme.textPresets.preset1.lineHeight};
`;

function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

export default Title;
