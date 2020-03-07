import React from 'react'
import { Modal } from 'react-materialize';

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
            <div style={ {cursor: "pointer"} }
                 onClick={this.handleDelete}>
              &#128465;
            </div>
          </ul>
        </div>
        <div id = "appster_yes_no_modal" class = "appster_modal" data-animation="modal_animation_left">
            <div id = "appster_yes_no_modal_frame" class="appster_modal_frame">
              <header id="appster_yes_no_modal_header" class="appster_modal_header"></header>
              <section id="appster_yes_no_modal_section" class="appster_modal_section">
                <p>
                  <strong> Are you sure you want to delete this logo?</strong>
                </p>
                <button id = "appster_yes_no_modal_yes_button" class="appster_modal_button">Yes</button>
                <button id = "appster_yes_no_modal_no_button" class="appster_modal_button">No</button>
              </section>
              <undefined class ="appster_modal_footer">The logo will not be retreivable</undefined>
            </div> 
        </div>
      </nav>
      
    )
  };
}

export default Navbar;