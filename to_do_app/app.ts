import * as readline from "readline";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

let tasks: Task[] = [];
let nextId = 1;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function listTasks() {
  console.log("\n📝 Görevler:");
  tasks.forEach((task) => {
    console.log(`[${task.completed ? "x" : " "}] ${task.id}. ${task.title}`);
  });
  console.log("");
}

function menu() {
  rl.question(
    "1. Ekle\n2. Sil\n3. Tamamla\n4. Listele\n5. Çıkış\nBir seçenek girin: ",
    (answer) => {
      switch (answer.trim()) {
        case "1":
          rl.question("Görev adı: ", (title) => {
            tasks.push({ id: nextId++, title, completed: false });
            console.log("✅ Eklendi.\n");
            menu();
          });
          break;
        case "2":
          rl.question("Silinecek ID: ", (id) => {
            tasks = tasks.filter((t) => t.id !== Number(id));
            console.log("🗑️ Silindi.\n");
            menu();
          });
          break;
        case "3":
          rl.question("Tamamlanacak ID: ", (id) => {
            const task = tasks.find((t) => t.id === Number(id));
            if (task) task.completed = true;
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
    }
  );
}

menu();
