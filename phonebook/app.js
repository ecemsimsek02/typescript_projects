var contacts = [];
function render() {
    var list = document.getElementById("list");
    list.innerHTML = "";
    contacts.forEach(function (c) {
        var li = document.createElement("li");
        li.textContent = "".concat(c.name, " - ").concat(c.phone, " - ").concat(c.email);
        list.appendChild(li);
    });
}
document.getElementById("addBtn").addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    if (name && phone && email) {
        contacts.push({ name: name, phone: phone, email: email });
        render();
    }
});
