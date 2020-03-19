import React from 'react'
import { Modal, Button} from 'react-materialize'

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
            Home
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <Modal
              actions={[<Button className="modalButton2" modal="close" node="button" waves="green">No</Button>, <Button modal = "close" node="button" waves="green" onClick={this.handleDelete}>Yes</Button>]}
              header="Are you sure you want to permanently delete this Logo?"
              id="modal-0"
              options={{
                dismissible: true,
                endingTop: '30%',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: '10%'
              }}
              trigger={<div className="delete" style={ {cursor: "pointer"} }>&#128465;</div>}>
            </Modal>
          </ul>
        </div>
      </nav>
      
    )
  };
}

export default Navbar;