import { StyleSheet, Button, TextInput, View } from "react-native";

import React, { useState } from "react";
import { useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTasks } from "@/hooks/useTask";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";

const AddTaskScreen: React.FC = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const { addTask } = useTasks();
  const [text, setText] = useState("");

  const handleAddTask = () => {
    if (text.trim()) {
      addTask(text);
      setText("");
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={[styles.input, { color: Colors[colorScheme ?? "light"].tint }]}
        placeholder='Digite a nova tarefa'
        value={text}
        onChangeText={setText}
      />
      <View style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 60 }}>
        <Button title='Adicionar' onPress={handleAddTask} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
  },
  task: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  taskText: {
    fontSize: 18,
  },
  completedTask: {
    fontSize: 18,
    textDecorationLine: "line-through",
    color: "gray",
  },
});
export default AddTaskScreen;
