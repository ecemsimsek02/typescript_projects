interface Contact {
  name: string;
  phone: string;
  email: string;
}

let contacts: Contact[] = [];

function render() {
  const list = document.getElementById("list")!;
  list.innerHTML = "";
  contacts.forEach((c) => {
    const li = document.createElement("li");
    li.textContent = `${c.name} - ${c.phone} - ${c.email}`;
    list.appendChild(li);
  });
}

document.getElementById("addBtn")!.addEventListener("click", () => {
  const name = (<HTMLInputElement>document.getElementById("name")).value;
  const phone = (<HTMLInputElement>document.getElementById("phone")).value;
  const email = (<HTMLInputElement>document.getElementById("email")).value;

  if (name && phone && email) {
    contacts.push({ name, phone, email });
    render();
  }
});
