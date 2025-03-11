import {
  View,
  FlatList,
  Button,
} from "react-native";

import { useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTasks } from "@/hooks/useTask";
import ItemList from "@/components/ItemList";

export default function HomeScreen() {
  const { tasks, toggleTask, clearCompleted } = useTasks();

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={tasks}
        style={{ flex: 0 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemList item={item} toggleTask={toggleTask} />
        )}
      />
      <View style={{ marginBottom: 60 }}>
        <Button
          title='Limpar Concluídas'
          onPress={clearCompleted}
          color='red'
        />
      </View>
    </SafeAreaView>
  );
}
