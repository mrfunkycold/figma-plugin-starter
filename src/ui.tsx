import React from "react";
import ReactDOM from "react-dom";
import App from "./ui/App";

// ------------------------
// starts up the app and rerenders anytime there is an event
// ------------------------

function renderApp(pluginData: any) {
    ReactDOM.render(
        <App plugin_data={pluginData} />,
        document.getElementById("root")
    );
}

window.onmessage = (event: MessageEvent) => {
    if (event.data.pluginMessage.type === "updatePluginData") {
        renderApp(event.data.pluginMessage.data);
    }
};

renderApp({});
