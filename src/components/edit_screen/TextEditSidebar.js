import React, { Component } from 'react'
import { Modal, Button } from 'react-materialize'

class TextEditSidebar extends Component {
    constructor() {
        super();

        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            sliderDistance: 24,
            textColor : "#FF0000",
            fontSize : 24,
            backgroundColor: "#FF0000",
            borderColor: "#FFFFFF",
            borderRadius: 0
        }
    }

    handleUndo = () => {
        this.props.undoCallback();
    }

    handleTextColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ textColor: event.target.value, fontSize: this.props.logo.fontSize, backgroundColor: this.props.logo.backgroundColor,
                        borderColor: this.props.logo.borderColor, borderRadius: this.props.logo.borderRadius}, this.completeUserEditing);
    }

    handleFontSizeChange = (event) => {
        console.log("handleFontSizeChangeComplete to " + event.target.value);
        this.setState({ fontSize: event.target.value, textColor: this.props.logo.textColor, backgroundColor: this.props.logo.backgroundColor,
                        borderColor: this.props.logo.borderColor, borderRadius: this.props.logo.borderRadius}, this.completeUserEditing);
    }

    handleBorderRadiusChange = (event) => {
        console.log("handleBorderRadiusChange to " + event.target.value);
        this.setState({ borderRadius: event.target.value, fontSize: this.props.logo.fontSize, textColor: this.props.logo.textColor, 
                        backgroundColor: this.props.logo.backgroundColor, borderColor: this.props.logo.borderColor}, this.completeUserEditing);
    }

    handleBackgroundColorChange = (event) => {
        console.log("handleBackGroundColorChangeComplete to " + event.target.value);
        this.setState({ backgroundColor: event.target.value, textColor: this.props.logo.textColor, fontSize: this.props.logo.fontSize, 
                        borderColor: this.props.logo.borderColor, borderRadius: this.props.logo.borderRadius}, this.completeUserEditing);
    }

    handleBorderColorChange = (event) => {
        console.log("handleBorderColorChangeComplete to " + event.target.value);
        this.setState({ borderColor: event.target.value, backgroundColor: this.props.logo.backgroundColor, textColor: this.props.logo.textColor, 
                    fontSize: this.props.logo.fontSize, borderRadius: this.props.logo.borderRadius}, this.completeUserEditing);
    }

    completeUserEditing = () => {
        console.log("completeUserEditing");
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.props.logo.text, this.state.textColor, this.state.fontSize, this.state.backgroundColor, this.state.borderColor, this.state.borderRadius);
    }

    render() {
        let undoDisabled = !this.props.canUndo();
        let undoClass = "waves-effect waves-light btn-small";
        if (undoDisabled)
            undoClass += " disabled";
        return (
            <div className="card-panel col s4">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <Modal
                        actions={[<Button flat modal="close" node="button" waves="green">Close</Button>]}
                        bottomSheet={false}
                        fixedFooter={false}
                        header="Please enter the text for your logo:"
                        id="modal-0"
                        options={{
                            dismissible: true,
                            endingTop: '10%',
                            inDuration: 250,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            opacity: 0.5,
                            outDuration: 250,
                            preventScrolling: true,
                            startingTop: '4%'
                        }}
                        trigger={<Button node="button" className="waves-effect waves-light btn-small">&#9998;</Button>}>
                        <input type="text"
                            //onChange={this.handleTextColorChange}
                            //value={this.props.logo.textColor}
                        />
                    </Modal>
                        <span>  </span>
                        <button className={undoClass} onClick={this.handleUndo}>Undo</button>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <div className="row">
                            <div className="col s4">Text Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleTextColorChange}
                                        value={this.props.logo.textColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Font Size:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize}>
                                </input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Background Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleBackgroundColorChange}
                                        value={this.props.logo.backgroundColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleBorderColorChange}
                                        value={this.props.logo.borderColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Radius:</div>
                            <div className="col s8">
                                <input type="range" min="0" max="200" 
                                    onChange={this.handleBorderRadiusChange}
                                    value={this.props.logo.borderRadius}>
                                </input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditSidebar