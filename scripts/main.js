function id(elementId) { return document.getElementById(elementId) };
let json;
async function thief(link) {
  await fetch(link).then(r => r.json()).then(data => json = data);
  console.log(json);
};
thief('../json/users.json');
