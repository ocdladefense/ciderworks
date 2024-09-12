/** @jsx vNode */ /** @jsxFrag "Fragment" */
import { vNode, View } from "@ocdla/view";
import "../css/input.css";
import HttpClient from "@ocdla/lib-http/HttpClient.js";
import SiteMock from "../mock/SiteMock.js";
import { parseReferences } from "@ocdladefense/ors/src/Outline.js";
import App from "../components/AppNew";

if (USE_MOCK) {
    HttpClient.register("https://example.com/", new SiteMock());
}

/**
let text = "138.5(3)(a),(4)(a)-(c)";
Parser.parseReferences(text);
 */
let parsed = parseReferences("(3)(a),(4)(a)-(c)");
console.log(parsed);

const $root = document.getElementById("root");
const root = View.createRoot($root);

root.render(<App />);
