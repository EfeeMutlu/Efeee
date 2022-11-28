import React, { useState } from "react";
import { Text, SafeAreaView, View, TextInput, TouchableOpacity, FlatList, ImageBackground, Image } from "react-native";
import { _taskHandle } from "react-native/Libraries/Interaction/Batchinator";
import { appStyles, appStyles as styles } from "./styles";


function App() {
  const [text, setText] = useState("");

  const [tasks, setTasks] = useState([]);

  const handleAddTaskPress = () => {
    setTasks([...tasks, text]);
    setText("");
  };

  const handleDeleteTaskPress = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* <Image source={require('./header.png')} style={styles.header} /> */}
        <Text style={styles.title}>Yapılacaklar</Text>
        {/* <Text style={styles.subtitle}>Yapılacak şeyleri buraya gir</Text> */}
        <TextInput style={styles.input}
          placeholder="Lütfen bir plan giriniz"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.buttonContainer}
          onPress={handleAddTaskPress}
        >
          <Text style={styles.buttonText}>Gönder</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <FlatList data={tasks}
          renderItem={({ item, index }) => (
            <View style={styles.taskContainer}>
              <Text style={styles.taskText}>{item}</Text>
              <TouchableOpacity style={styles.taskDelete} onPress={() => handleDeleteTaskPress(index)}>
                <Text style={styles.taskDeleteText}>X</Text>
              </TouchableOpacity>

            </View>
          )}
          keyExtractor={(item) => + Date.now() + Math.random()}
        />
      </View>
    </SafeAreaView>
  );
}


export default App;