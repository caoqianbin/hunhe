import React, { Component } from 'react'
import { View, Image ,ToastAndroid,TouchableOpacity,Text} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Actions } from 'react-native-router-flux'

export default class logon extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            pwd0:'',
            phone:'',
            islogon:''
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    pwd0handle = (text)=>{
        this.setState({pwd0:text})
    }
    phonehandle = (text)=>{
        this.setState({phone:text})
    }
    logon = () =>{
        if(this.state.username && this.state.pwd && this.state.pwd0 && this.state.phone){
            
            ToastAndroid.show('注册成功',5)
            Actions.login();   
        } 
        else{
            ToastAndroid.show('注册失败,请填写完整的信息',100)
        }
    }
    render() {
        
        return (
            <View style={{flex:1}}>
                <View style={{marginTop:10,marginLeft:5}}>
                    <TouchableOpacity style={{flexDirection:'row',}} onPress={Actions.login}>
                        <Image style={{height:30,width:30}} source={require('../../assets/zuo1.png')}/>
                        <Text style={{color:'#8a8a8a',fontSize:20,marginLeft:5,marginTop:2}}>返回登录</Text>
                    </TouchableOpacity>
                    
                </View>
                <View  style={{marginTop:270,alignItems:'center'}}>
                    <View style={{
                    flexDirection:'row',
                    width:'80%',
                    height:40,
                    margin:10,
                    borderBottomWidth:1,
                    borderBottomColor:'#ccc',
                    }}>
                        <Image style={{width:30, height:30,}} source={require('../../assets/per1.png')}/>
                        
                        <TextInput onChangeText={this.userhandle} style={{fontSize:20,padding: 0,paddingLeft: 10}} placeholder='请输入用户名'/>
                    </View>
                    <View style={{
                    flexDirection:'row',
                    width:'80%',
                    height:40,
                    margin:10,
                    borderBottomWidth:1,
                    borderBottomColor:'#ccc',
                    }}>
                        <Image style={{width:30, height:30,}} source={require('../../assets/mi.png')}/>
                        <TextInput secureTextEntry={true} onChangeText={this.pwdhandle} style={{fontSize:20,padding: 0,paddingLeft: 10}} placeholder='请输入密码'/>
                    </View>
                    <View style={{
                    flexDirection:'row',
                    width:'80%',
                    height:40,
                    margin:10,
                    borderBottomWidth:1,
                    borderBottomColor:'#ccc',
                    }}>
                        <Image style={{width:30, height:30,}} source={require('../../assets/mi.png')}/>
                        <TextInput secureTextEntry={true} onChangeText={this.pwd0handle} style={{fontSize:20,padding: 0,paddingLeft: 10}} placeholder='请再次输入密码'/>
                    </View>
                    <View style={{
                    flexDirection:'row',
                    width:'80%',
                    height:40,
                    margin:10,
                    borderBottomWidth:1,
                    borderBottomColor:'#ccc',
                    }}>
                        <Image style={{width:30, height:30,}} source={require('../../assets/hao.png')}/>
                        <TextInput secureTextEntry={true} onChangeText={this.phonehandle} style={{fontSize:20,padding: 0,paddingLeft: 10}} placeholder='请输入手机号'/>
                    </View>
                    
                    <TouchableOpacity
                        onPress={this.logon}
                        style={{
                            width:'60%',
                            height:40,
                            marginTop:30,
                            alignItems:'center',
                            borderRadius:10,
                            backgroundColor:'red',
                            justifyContent:'center'
                        }}
                    >
                        <Text  style={{color:'white',fontSize:18,}}>注册</Text>
                    </TouchableOpacity>
                        
                </View>
                
            </View>
        )
    }
}
