import React, { FC } from "react";
import ReactDOM from "react-dom";
import App from "./ui/App";

interface UIProps {
    pluginData: any;
}

const UI: FC<UIProps> = ({ pluginData }) => {
    return (
        <div>
            <App plugin_data={pluginData} />
        </div>
    );
};

// ------------------------
// starts up the app and rerenders anytime there is an event
// ------------------------

function renderApp(pluginData: any) {
    ReactDOM.render(
        <UI pluginData={pluginData} />,
        document.getElementById("root")
    );
}

window.onmessage = (event: MessageEvent) => {
    if (event.data.pluginMessage.type === "updatePluginData") {
        renderApp(event.data.pluginMessage.data);
    }
};

renderApp({});
