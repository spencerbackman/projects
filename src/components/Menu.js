import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}> <Link className="nav" id="home-link" to="/">Home</Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link className="nav" id="backdrops-link" to="/backdrops">Backdrops</Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link className="nav" id="contact-link" to="/contact">Contact</Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link className="nav" id="faq-link" to="/faqs">Faqs</Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link className="nav" id="pricing-link" to="/pricing">Pricing</Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link className="nav" id="temp-link" to="/templates">Templates</Link></MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;