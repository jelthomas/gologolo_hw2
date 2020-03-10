import React, { Component } from 'react'

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT
class TextEditWorkspace extends Component {
    render() {
        const styles = {
            container: {
                color: this.props.logo.textColor,
                fontSize: this.props.logo.fontSize + "pt",
                background: this.props.logo.backgroundColor,
                borderColor: this.props.logo.borderColor,
                borderRadius: this.props.logo.borderRadius +  "px",
                borderWidth: this.props.logo.borderWidth + "px",
                borderStyle: "solid"
            }
        }
        return (
            <div className="col s8"> 
                <div className="logo" style={ styles.container }>
                    {this.props.logo.text}
                </div>
            </div>
        )
    }
}

export default TextEditWorkspace