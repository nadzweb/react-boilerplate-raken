import styled from 'styled-components';

export const NavWrap = styled.div`
  border: 1px solid #ddd;
  margin: 15px 1px 20px 0px;
  color: #222;
  /** the below font-family should be in body if entire body is roboto, putting it here just to style top-nav */
  
  font-family: 'Roboto', sans-serif;

  .company-name {
    font-size: 16px;
    padding-top: 15px;
    text-transform: uppercase;
  }
  .menu-links {
    float: right;
    padding-top: 15px;
  }
  .badge {
    background-color: darkorange;
    padding: 5px;
    color: #fff;
  }
  .dropdown-wrap {
    position: relative;
    border-left: 1px solid #ccc;
    padding: 0px 5px;
    .more-link {
      display: block;
      font-size: 30px;
      color: #ccc;
      text-align:center;
    }
    .more-links {
      margin-top: 2px;
      margin-left: -90px;
      position: absolute;
      display: none;
      background-color: #fff;
      min-width: 150px;
      z-index: 1;
      padding-top: 10px;
      .arrow-up {
        width: 0;
        height: 0;
        margin-right: 25px;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #ccc;
        float: right;
        margin-top: -10px;
      }
      
      ul {
        padding: 0px;
        margin: 0px;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 2px 1px 5px 3px #ccc;
        li {
          list-style: none;
          a {
            padding: 10px;
            display: block;
            &:hover, &:active, &.active {
              background-color: #e1e1e1;
              box-shadow: 0px 5px 5px 0px #ddd;
              color: #222;
            }
          }
        }
      }
    }
    &:hover .more-links {
      display: block;
    }
    &:hover {
      background-color: #ddd;
    }
  }
`;