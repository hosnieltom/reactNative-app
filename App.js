import React, {Component} from "react";
import { Text, View, Button} from "react-native";
import ToDoList from "./toDoList.js";
class MyToDoList extends Component {
  render()
  {
    return(
      <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Welcome to my To-do-list</Text>
        <ToDoList name="Hosni"/>
      </View>
    );
  }
  
}

export default MyToDoList;

