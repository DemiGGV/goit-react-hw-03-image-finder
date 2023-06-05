import styled from 'styled-components';

export const FormContainerCSS = styled.form`
  width: 300px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  box-shadow: inset 2px 2px 5px rgba(154, 147, 140, 0.5),
    1px 1px 5px rgba(255, 255, 255, 1);
`;

export const ContainerCSS = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 10px;
`;
