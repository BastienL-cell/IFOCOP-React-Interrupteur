import React from "react";

export default class Button extends React.Component {

    constructor() {
        super();
        this.state = {
            icon: <i className="fas fa-toggle-on"></i>,
            classe: "on",
            texte: "Éteindre",
            status: true,
        }
    }

    switch() {
        this.setState({
            status: !this.state.status
        })
        console.log([this.status, this.classe, this.texte])
    }

    render() {
        if (this.state.status === true) {
            this.classe = "on";
            this.texte = "Éteindre";
            this.icon = <i className="fas fa-toggle-on"></i>;
        } else {
            this.classe = "off";
            this.texte = "Allumer";
            this.icon = <i className="fas fa-toggle-off"></i>;
        }
        console.log([this.status, this.classe, this.texte])
        return (
            <button className={this.classe} onClick={this.switch.bind(this)}>{this.icon}{this.texte}</button>
        );
    }
}