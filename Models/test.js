
import React from 'react'
import { View,  StyleSheet, Text, Button, TouchableOpacity} from 'react-native'

/*
export default class Test1 extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {
            texto: props.txt
        }
    }

    render() {
        return(
            <TouchableOpacity style= {styles.center} onPress = {() => {this.setState({texto: "newText"})}}>
                <Text>{this.state.texto}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    center: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }})

*/

/*
export default class Test1 extends React.Component {

    constructor(props)
    {
        super(props)
        this.state = {
            texto: props.txt
        }
    }

    render() {
        return(
            <View style= {styles.center}>
                <Text>{this.state.texto}</Text>
                <Button title= "press to change" onPress = {() => 
                {
                    this.setState({texto: "newText"}) 
                
                }}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    center: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }})
*/

export default class Test1 extends React.Component {

    constructor(props)
    {
        super(props)
        this.txt = this.props.txt
    }

    appupdate = () => {
        this.forceUpdate()
      }
    
    render() {
        console.log(this.props.txt)
        return(
            <View style= {styles.center}>
                <Text>{this.txt}</Text>
                <Button title= "press to change" onPress = {() => 
                {
                    this.txt = "HJHAD"
                    this.appupdate()
                }}>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    center: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }})
    