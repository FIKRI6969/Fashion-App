const ButtonComponent = ({backgroundColor,text})=>{
  return(
    <View style={{
      backgroundColor: backgroundColor,
       width: 100, height: 50,
      bondenRadius: 10,
      marginLeft: 10
  }}>
      <Text style={{
          color: 'white',
          textAlign:'center',
          lineHeight: 50,
          fontSize: 20,
          fontWeight: 'bold'
      }}>
          {text}
      </Text>
      </View>
    
  )
}