import React, {Component} from "react";
import { Button, Text, TextInput, View } from "react-native";

class ToDoList extends Component {
    state = { myList:[] };
    saveInput = (userInput) => {
        this.setState({ input: userInput.target.value });
      };

      // shorter syntax and its synchronous
      addNewItem = () => {
        this.setState(previousState => ({
            myList: [...previousState.myList, previousState.input],
          }));
      };
      
      deleteItem = index => {
        const newList = [...this.state.myList];

        newList.splice(index, 1);

        this.setState({myList: newList})
      };
      /*
      // longer syntax and its asynchronous
      addNewItem = () => {
        let { myList, input } = this.state;
        myList.push(input);
        this.setState({myList: myList});
     };
    
     */
  render()
  {
    
    return(
      <View>
          <Text>HHH {this.props.name}</Text>

            <TextInput
            style={{height: 40},{borderColor: "gray"},{borderWidth: 1}}
            onChange={this.saveInput}
            placeholder="Type a text"
            />
            <Button
            title="add"
            color="gray"
            accessibilityLabel="Add"
            onPress={this.addNewItem}
            />
            <ol>
            {this.state.myList.map((subItems, sIndex) => {
                //return <li key={sIndex}> {subItems}</li>
                return <li key={`${subItems}${sIndex}`}> {subItems} 
                <Button
                title="Done"
                color="red"
                onPress={this.deleteItem}
                /></li>;
            })}
            </ol>
                
      </View>

    );
  }
  
}
/*<text>Hello {this.props.name}</text>
        <input type="checkbox" />
        <label>test</label> 
        <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}/>
        */

export default ToDoList;