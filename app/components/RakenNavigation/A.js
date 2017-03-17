import styled from 'styled-components';
import { Link } from 'react-router';

const A = styled(Link)`
  font-size: 14px;
  text-transform: uppercase;
  padding: 5px 10px;
  color: #222;
  text-decoration: none;
  &:link {
    text-decoration: none;
    color: #222;
  }
  &:hover {
    color: #f0ad4e;
    text-decoration: none;
  }
  &:active, &.active {
    color: #f0ad4e;
    text-decoration: none;
  }
`;

export default A;
