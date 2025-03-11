import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { Task } from "@/hooks/useTask";
import { useThemeColor } from '@/hooks/useThemeColor';
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ItemListProps {
  toggleTask: (e: string) => void;
  item: Task;
}

const ItemList: React.FC<ItemListProps> = ({ toggleTask, item }) => {
  const colorScheme = useColorScheme();
  return (
    <TouchableOpacity onPress={() => toggleTask(item.id)} style={styles.task}>
      <Text style={[
          { color: Colors[colorScheme ?? 'light'].tint },
          item.completed ? styles.completedTask : styles.taskText
        ]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default ItemList;
