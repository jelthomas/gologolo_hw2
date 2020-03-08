import React from 'react'

class Navbar extends React.Component {
  constructor() {
    super();

    console.log("Navbar constructed");
  }

  componentDidMount = () => {
      console.log("\tNavbar component did mount");
  }

  componentWillUnmount = () => {
      console.log("\tNavbar component will unmount");
  }

  handleGoHome = () => {
    console.log("handleGoHome");
    this.props.goToHomeCallback();
  }

  handleDelete = () => {
    console.log("handleDelete");
    this.props.deleteLogo(this.props.logo.key);
  }

  
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div  className='brand-logo' 
                style={ {cursor: "pointer"} }
                onClick={this.handleGoHome}>
            goLogoLo
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <div className = "delete" style={ {cursor: "pointer"} }
                 onClick={this.handleDelete}>
              &#128465;
            </div>
          </ul>
        </div>
      </nav>
      
    )
  };
}

export default Navbar;