/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import "../css/input.css";
//import HttpClient from "@ocdla/lib-http/HttpClient.js";
import App from "../components/App.jsx";
import Home from "../components/Home.jsx"

if (USE_MOCK) {
}

const $root = document.getElementById("root");
const root = View.createRoot($root);
root.render(<App />);
