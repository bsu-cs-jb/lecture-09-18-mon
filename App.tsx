import { StyleSheet, View } from "react-native";
import { styles } from "./LectureApp";

import TasksView, { addTask } from "./TasksView";

export default function App() {
  addTask();

  return (
    <View style={[appStyles.safeArea, styles.topLevelContainer]}>
      <TasksView />
    </View>
  );
}

const appStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 60,
    paddingBottom: 20,
  },
});
