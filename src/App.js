import React from "react";
import Button from "./Button";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1><i className="fas fa-power-off"></i> Interrupteur</h1>
                <Button />
            </div>
        );
    }
}