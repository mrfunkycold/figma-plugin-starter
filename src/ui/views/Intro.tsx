import React, { ChangeEvent } from "react";

type IntroProps = {
    plugin_data: any;
    addName(nameInput: string): void;
};

type IntroState = {
    nameInput: string;
};

export default class Intro extends React.Component<IntroProps, IntroState> {
    constructor(props) {
        super(props);

        this.state = {
            nameInput: props.plugin_data.local.name_example
        };
    }

    private updateName = (ev: ChangeEvent<HTMLInputElement>) => {
        const nameInput = ev.target.value;

        this.setState(() => ({
            nameInput
        }));
    };

    private addName = () => {
        this.props.addName(this.state.nameInput);
    };

    render() {
        return (
            <div>
                <h1 className="type type--pos-x-large-normal mb-4">
                    Test plugin
                </h1>
                <div className="mb-2">
                    This is a test plugin that uses React and{" "}
                    <a
                        href="https://thomas-lowry.github.io/figma-plugin-ds"
                        target="_blank">
                        Figma Plugin DS
                    </a>{" "}
                    styles to write your name to this Figma file.
                </div>
                <div className="mb-2">
                    <input
                        className="input"
                        onChange={this.updateName}
                        defaultValue={this.state.nameInput}
                        placeholder="Enter your name"></input>
                </div>
                <button
                    className="button button--primary"
                    onClick={this.addName}>
                    Write name
                </button>
            </div>
        );
    }
}
