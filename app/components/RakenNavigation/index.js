import React from 'react';

import A from './A';
import { NavWrap } from './Styles';

class RakenNavigation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() { 
    return (
      <NavWrap className="row">
        <div className="col-xs-6 col-sm-3 col-md-3">
          <div className="company-name">Company name</div>
        </div>
        <div className="col-xs-4 col-sm-8 col-md-8">
          <div className="menu-links hidden-xs">
            <A to="/" activeClassName="active">dashboard</A>
            <A to="/features" activeClassName="active">projects</A>
            <A to="/team" >team</A>
            <A to="/company">company</A>
          </div>
        </div>
        <div className="col-xs-2 col-sm-1 col-md-1 dropdown-wrap">
            <A className="more-link" href="/" >
              <i className="fa fa-user-circle" aria-hidden="true"></i>
            </A>
            <div className="more-links">
              <div className="arrow-up"></div>
              <ul>
                <li className="visible-xs"><A to="/" activeClassName="active">dashboard</A></li>
                <li className="visible-xs"><A to="/features" activeClassName="active">projects</A></li>
                <li className="visible-xs"><A to="/team">team</A></li>
                <li className="visible-xs"><A to="/company">company</A></li>
                <li><A to="/profile">my profile </A> </li>
                <li><A to="/projects">my projects <span className="badge">23</span></A></li>
                <li><A to="/notifications">notifications <span className="badge">23</span></A></li>
                <li><A to="/tasks">tasks <span className="badge">23</span></A></li>
                <li><A to="/help">help</A></li>
                <li><A to="/logout">logout</A></li>
              </ul>
            </div>
        </div>
      </NavWrap>
    );
  }
}

export default RakenNavigation;