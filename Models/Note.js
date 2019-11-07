import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class Note extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.text} numberOfLines= {6} >{this.props.leText}    
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    height: 30,
    margin: 5

  },
  text: {
    fontStyle: 'italic',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    color: '#666666',
    paddingRight: 5,
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})

export default Note