import React from "react";

import Intro from "./views/Intro";

// Include the Figma Plugin Design System
import "./styles/global/figma-plugin-ds.css";

// Include our base styles for the plugin
import "./styles/base.css";

type AppProps = {
    plugin_data: any;
};

export default class App extends React.Component<AppProps> {
    render() {
        if (this.props.plugin_data.local) {
            return (
                <div className="app type type--pos-medium-normal">
                    <Intro
                        addName={this.addName}
                        plugin_data={this.props.plugin_data}
                    />
                </div>
            );
        }

        return null;
    }

    private addName(nameInput: string) {
        console.log("nameInput", nameInput);
        parent.postMessage(
            {
                pluginMessage: {
                    type: "writeName",
                    name: "name_example",
                    value: nameInput
                }
            },
            "*"
        );
    }
}
