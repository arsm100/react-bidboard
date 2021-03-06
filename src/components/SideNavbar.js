import React, { Component } from 'react';
import { Col, Nav, NavItem, DropdownItem } from 'reactstrap'
import { Link } from 'react-router-dom'


export default class SideNavbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const {currentUrl} = this.props
    
    return (
      <Col md="2" className="d-none d-md-block sidebar">
        <div className="sidebar-sticky">
          <Nav className="flex-column">
            <NavItem className={`${currentUrl === '/' ? 'bg-primary' : ''}`} >
              <Link to={'/'} className={`nav-link ${currentUrl === '/' ? 'text-white' : ''}`}>
                <span data-feather="home" ></span>
                Dashboard<span className="sr-only">(current)
                </span>
              </Link>
            </NavItem>
            <NavItem className={`${currentUrl === '/bid' ? 'bg-primary' : ''}`} >
              <Link to={'/bid'} className={`nav-link ${currentUrl === '/bid' ? 'text-white' : ''}`}>
                <span data-feather="home"></span>
                Bid<span className="sr-only">(current)
                </span>
              </Link>
            </NavItem>
            <NavItem className={`${currentUrl === '/new' ? 'bg-primary' : ''}`} >
              <Link to={'/new'} className={`nav-link ${currentUrl === '/new' ? 'text-white' : ''}`}>
                <span data-feather="home"></span>
                New Advertisement<span className="sr-only">(current)
                </span>
              </Link>
            </NavItem>
            <h6 className="d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Settings</span>
              <a className="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
          </Nav>
          <Nav className="flex-column mb-2">
            <NavItem>
              <Link to={'/login'} onClick={this.props.logout} className="nav-link bg-transparent border-0">Log out</Link>
            </NavItem>
          </Nav>

        </div>
      </Col>
    )
  }

}



