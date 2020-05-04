import styled from 'styled-components';

import background from '../../assets/background.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  padding: 1rem;
  align-items: center;
  /* background: url(${background});
  background: url('https://www.toptal.com/designers/subtlepatterns/patterns/memphis-mini-dark.png');
  background-size: cover; */
  background: #DED0F2;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    *background: rgba(0, 0, 0, 0.9);
  }
`;
