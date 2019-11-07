import React from 'react'
import { View,  StyleSheet, Text, Button, TextInput, FlatList, Alert} from 'react-native'
import Note from './Note'

/*
export default class Notes extends React.Component {

    constructor(props)
    {
        super(props)
        this.currentText= ""
        this.state = {
            NoteList: ["Notesss"],
        }
    }

    _newLetter(text)
    {
        console.log(text)
        this.currentText = text
    }
    _addNote()
    {
        if (this.currentText.length != 0)
        {
            this.setState({
                NoteList: [...this.state.NoteList, this.currentText]
            })
            this.currentText = ""
        }
        else
            Alert.alert("Please enter a Note")
    }
    render() {
        console.log(this.state)
        return (
            <View style={{ marginTop: 20, flex:1}}>
            <TextInput 
                style={styles.textinput} 
                placeholder='Note'
                onChangeText={(text) => this._newLetter(text)}
                onSubmitEditing={() => this._addNote()}
                value = {this.currentText}
            />
            <Button title='Ajouter' onPress={() => {this._addNote()}}/>
            <FlatList
                data={this.state.NoteList}
                renderItem={({item}) => <Note  leText= {item} />}
            />
          </View>
        )
    }
}

const styles = StyleSheet.create({
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    }
  })
*/


export default class Notes extends React.Component {

    constructor(props)
    {
        super(props)
        this.currentText= ""
        this.state = {
            NoteList: [{id:"0", text:"Notesss"}],
            counter: 1
        }
    }

    _newLetter(text)
    {
        console.log(text)
        this.currentText = text
    }
    _addNote()
    {
        if (this.currentText.length != 0)
        {
            this.setState({
                counter: this.state.counter + 1,
                NoteList: [...this.state.NoteList, {id: this.state.counter.toString(), text: this.currentText}]
            })
            this.currentText = ""
        }
        else
            Alert.alert("Please enter a Note")
        this.textInput.clear()
    }
    render() {
        return (
            <View style={{ marginTop: 20, flex:1}}>
            <TextInput 
                ref={input => { this.textInput = input }}
                style={styles.textinput} 
                placeholder='Note'
                onChangeText={(text) => this._newLetter(text)}
                onSubmitEditing={() => this._addNote()}
            />
            <Button title='Ajouter' onPress={() => {this._addNote()}}/>
            <FlatList
                data={this.state.NoteList}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Note  leText= {item.text} />}
            />
          </View>
        )
    }
}

const styles = StyleSheet.create({
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    }
  })
