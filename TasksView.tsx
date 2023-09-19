import { useState } from "react";
import { Button, Text, View } from "react-native";

export function addTask() {
  return true;
}

export function rand(n = 2) {
  return (Math.random() * 10 ** n).toFixed().toString().padStart(2, "0");
}

export function ts() {
  const timestamp = new Date();
  return (
    timestamp.getMinutes().toString().padStart(2, "0") +
    ":" +
    timestamp.getSeconds().toString().padStart(2, "0") +
    "." +
    timestamp.getMilliseconds().toString().padStart(3, "0")
  );
}

const TASK = {
  name: "Do homework",
  done: false,
  duration: 20,
};

export default function TasksView() {
  console.log(`TasksView(${ts()})`);
  const [task, setTask] = useState(TASK);

  console.log(JSON.stringify(task));
  // task.name = "WILL THIS WORK?";

  return (
    <View>
      <Text style={{ fontSize: 30 }}>{task.name}</Text>
      <Text style={{ fontSize: 30 }}>{task.done ? "yes" : "no"}</Text>
      <Text style={{ fontSize: 30 }}>{task.duration}</Text>
      <Button
        title="Change name"
        onPress={() => {
          task.name = `FROM BUTTON ${rand()}`;
          setTask({
            ...task,
          });
        }}
      />
    </View>
  );
}
