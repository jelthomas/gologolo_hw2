// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import React, { Component } from 'react'
import Navbar from './Navbar.js'
import TextEditSidebar from './TextEditSidebar.js'
import TextEditWorkspace from './TextEditWorkspace.js'

export class EditScreen extends Component {
    constructor(props) {
        super(props);

        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen constructor");

        this.state = {  
            deleteModalVisible: false
        }
    }

    keydownHandler = (e) =>{
        if(e.keyCode===90 && e.ctrlKey){
            this.props.undoCallback();
            this.forceUpdate();
        }
        if(e.keyCode===89 && e.ctrlKey){
            this.props.redoCallback();
            this.forceUpdate();
        }
    }

    componentDidMount = () => {
        document.addEventListener('keydown',this.keydownHandler);
        console.log("\tEditScreen component did mount");
    }

    componentWillUnmount = () => {
        document.removeEventListener('keydown',this.keydownHandler);
        console.log("\tEditScreen component will unmount");
    }

    render() {
        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen render");
        return (
            <div className="container">
                <Navbar 
                    logo={this.props.logo}
                    goToHomeCallback={this.props.goToHomeCallback} 
                    deleteLogo={this.props.deleteLogo}
                />
                <div className="row">
                    <TextEditSidebar
                        logo={this.props.logo}
                        changeLogoCallback={this.props.changeLogoCallback}
                        undoCallback={this.props.undoCallback}                                          
                        canUndo={this.props.canUndo}
                        redoCallback={this.props.redoCallback}                                          
                        canRedo={this.props.canRedo}                         
                    />
                    <TextEditWorkspace
                        logo={this.props.logo} />
                </div>
            </div>
        )
    }
}

export default EditScreen