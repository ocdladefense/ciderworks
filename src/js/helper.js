import contacts from '../data/contacts.json';


export function* changeNames() {
  let firsts = contacts.map(c => c.FirstName);
  for(let i=0; i<firsts.length; i++) {
    console.log("yielding", firsts[i]);
    yield firsts[i];
  }
}
