import styled from "styled-components";

const StyledTitle = styled.h1`
  margin-bottom: var(--spacing-400);
  font-size: var(--preset1-font-size);
  font-weight: var(--preset1-font-weight);
  line-height: var(--preset1-line-height);
`;

function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}

export default Title;
