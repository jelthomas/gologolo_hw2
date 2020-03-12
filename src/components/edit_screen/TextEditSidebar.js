import React, { Component } from 'react'
import { Modal, Button, Range } from 'react-materialize'
import TextInput from 'react-materialize/lib/TextInput';

class TextEditSidebar extends Component {
    constructor() {
        super();

        var tempText;
        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            text: "goLogoLo Logo",
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

    handleTextChange = () => {
        console.log("handleTextChange to " + this.tempText);
        this.setState({ text: this.tempText, textColor: this.props.logo.textColor, fontSize: this.props.logo.fontSize, backgroundColor: this.props.logo.backgroundColor,
            borderColor: this.props.logo.borderColor, borderRadius: this.props.logo.borderRadius, borderWidth: this.props.logo.borderWidth,
            padding: this.props.logo.padding, margin: this.props.logo.margin}, this.completeUserEditing);

    }

    handleTextColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ textColor: event.target.value, fontSize: this.props.logo.fontSize, backgroundColor: this.props.logo.backgroundColor,
                        borderColor: this.props.logo.borderColor, borderRadius: this.props.logo.borderRadius, borderWidth: this.props.logo.borderWidth,
                        padding: this.props.logo.padding, margin: this.props.logo.margin, text: this.props.logo.text}, this.completeUserEditing);
    }

    handleFontSizeChange = (event) => {
        console.log("handleFontSizeChangeComplete to " + event.target.value);
        this.setState({ fontSize: event.target.value, textColor: this.props.logo.textColor, backgroundColor: this.props.logo.backgroundColor,
                        borderColor: this.props.logo.borderColor, borderRadius: this.props.logo.borderRadius, borderWidth: this.props.logo.borderWidth,
                        padding: this.props.logo.padding, margin: this.props.logo.margin, text: this.props.logo.text}, this.completeUserEditing);
    }

    handleBorderRadiusChange = (event) => {
        console.log("handleBorderRadiusChange to " + event.target.value);
        this.setState({ borderRadius: event.target.value, fontSize: this.props.logo.fontSize, textColor: this.props.logo.textColor, 
                        backgroundColor: this.props.logo.backgroundColor, borderColor: this.props.logo.borderColor, borderWidth: this.props.logo.borderWidth,
                        padding: this.props.logo.padding, margin: this.props.logo.margin, text: this.props.logo.text}, this.completeUserEditing);
    }
    
    handleBorderWidthChange = (event) => {
        console.log("handleBorderWidthChange to " + event.target.value);
        this.setState({ borderWidth: event.target.value, borderRadius: this.props.logo.borderRadius, fontSize: this.props.logo.fontSize, textColor: this.props.logo.textColor, 
                        backgroundColor: this.props.logo.backgroundColor, borderColor: this.props.logo.borderColor,
                        padding: this.props.logo.padding, margin: this.props.logo.margin, text: this.props.logo.text}, this.completeUserEditing);
    }
    
    handlePaddingChange = (event) => {
        console.log("handlePaddingChange to " + event.target.value);
        this.setState({ padding: event.target.value, borderWidth: this.props.logo.borderWidth, borderRadius: this.props.logo.borderRadius, fontSize: this.props.logo.fontSize, textColor: this.props.logo.textColor, 
                        backgroundColor: this.props.logo.backgroundColor, borderColor: this.props.logo.borderColor, margin: this.props.logo.margin, text: this.props.logo.text}, this.completeUserEditing);
    }

    handleMarginChange = (event) => {
        console.log("handleMarginChange to " + event.target.value);
        this.setState({ margin: event.target.value, borderWidth: this.props.logo.borderWidth, borderRadius: this.props.logo.borderRadius, fontSize: this.props.logo.fontSize, textColor: this.props.logo.textColor, 
                        backgroundColor: this.props.logo.backgroundColor, borderColor: this.props.logo.borderColor, padding: this.props.logo.padding, text: this.props.logo.text}, this.completeUserEditing);
    }

    handleBackgroundColorChange = (event) => {
        console.log("handleBackGroundColorChangeComplete to " + event.target.value);
        this.setState({ backgroundColor: event.target.value, textColor: this.props.logo.textColor, fontSize: this.props.logo.fontSize, 
                        borderColor: this.props.logo.borderColor, borderRadius: this.props.logo.borderRadius, borderWidth: this.props.logo.borderWidth,
                        padding: this.props.logo.padding, margin: this.props.logo.margin, text: this.props.logo.text}, this.completeUserEditing);
    }

    handleBorderColorChange = (event) => {
        console.log("handleBorderColorChangeComplete to " + event.target.value);
        this.setState({ borderColor: event.target.value, backgroundColor: this.props.logo.backgroundColor, textColor: this.props.logo.textColor, 
                    fontSize: this.props.logo.fontSize, borderRadius: this.props.logo.borderRadius, borderWidth: this.props.logo.borderWidth,
                    padding: this.props.logo.padding, margin: this.props.logo.margin, text: this.props.logo.text}, this.completeUserEditing);
    }

    completeUserEditing = () => {
        console.log("completeUserEditing");
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.state.text, this.state.textColor, this.state.fontSize, 
                                    this.state.backgroundColor, this.state.borderColor, this.state.borderRadius, this.state.borderWidth, this.state.padding, this.state.margin);
    }

    handleInput = (event) => {
        this.tempText = event.target.value;
        console.log(this.tempText);
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
                        actions={[<Button className="modalButton" modal="close" node="button" waves="green">Close</Button>, <Button modal = "enter" node="button" waves="green" onClick={this.handleTextChange}>Enter</Button>]}
                        header="Please enter the text for your logo:"
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
                        trigger={<Button node="button" className="waves-effect waves-light btn-small">&#9998;</Button>}>
                        <TextInput defaultValue ={this.props.logo.text} onChange = {this.handleInput}
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
                                <Range
                                    max="144"
                                    min="4"
                                    name="points"
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize}
                                />
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
                        <div className="row">
                            <div className="col s4">Border Thickness:</div>
                            <div className="col s8">
                                <input type="range" min="0" max="250" 
                                    onChange={this.handleBorderWidthChange}
                                    value={this.props.logo.borderWidth}>
                                </input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Padding:</div>
                            <div className="col s8">
                                <input type="range" min="0" max="250" 
                                    onChange={this.handlePaddingChange}
                                    value={this.props.logo.padding}>
                                </input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Margin:</div>
                            <div className="col s8">
                                <input type="range" min="0" max="250" 
                                    onChange={this.handleMarginChange}
                                    value={this.props.logo.margin}>
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