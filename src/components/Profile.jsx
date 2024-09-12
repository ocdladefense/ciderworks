import { vNode } from "@ocdla/view";

export default function Profile(props) {

  return <h2>Hello, First Name: <span class="first-name">{props.firstName}</span> Last Name: <span class="last-name">{props.lastName}</span></h2>;
}
