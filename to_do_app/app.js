"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var tasks = [];
var nextId = 1;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function listTasks() {
    console.log("\n📝 Görevler:");
    tasks.forEach(function (task) {
        console.log("[".concat(task.completed ? "x" : " ", "] ").concat(task.id, ". ").concat(task.title));
    });
    console.log("");
}
function menu() {
    rl.question("1. Ekle\n2. Sil\n3. Tamamla\n4. Listele\n5. Çıkış\nBir seçenek girin: ", function (answer) {
        switch (answer.trim()) {
            case "1":
                rl.question("Görev adı: ", function (title) {
                    tasks.push({ id: nextId++, title: title, completed: false });
                    console.log("✅ Eklendi.\n");
                    menu();
                });
                break;
            case "2":
                rl.question("Silinecek ID: ", function (id) {
                    tasks = tasks.filter(function (t) { return t.id !== Number(id); });
                    console.log("🗑️ Silindi.\n");
                    menu();
                });
                break;
            case "3":
                rl.question("Tamamlanacak ID: ", function (id) {
                    var task = tasks.find(function (t) { return t.id === Number(id); });
                    if (task)
                        task.completed = true;
                    console.log("✔️ Tamamlandı.\n");
                    menu();
                });
                break;
            case "4":
                listTasks();
                menu();
                break;
            case "5":
                rl.close();
                break;
            default:
                console.log("❌ Geçersiz seçenek.\n");
                menu();
        }
    });
}
menu();
