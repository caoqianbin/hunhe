import React, {Component} from 'react';
import {View, Text, Image, TextInput, AsyncStorage,ToastAndroid ,TouchableOpacity} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'
export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isloading:false
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    login = ()=>{
        
        this.setState({isloading:true})
        myFetch.post('/login',{
            username:this.state.username,
            pwd:this.state.pwd}
        ).then(res=>{
            
            AsyncStorage.setItem('user',JSON.stringify(res.data))
                .then(()=>{
                    this.setState({isloading:false})
                    Actions.lightbox();
                })
        })
    } 
    backAndroidHandler=()=>{
        if(Actions.currentScene == 'login'){
            if(new Date().getTime()-now<2000){
                BackHandler.exitApp();
            }else{
                ToastAndroid.show('确定要退出吗',100);
                now = new Date().getTime();
                return true;
            }
        }else{
                Actions.pop();
              return true;
    }
    }   
    render() {
        return (
            <View style={{flex:1,justifyContent:'center'}}>
                
                <View  style={{alignItems:'center'}}>
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
                    
                <View style={{width:'100%', flexDirection:'row'}}>   
                    <TouchableOpacity
                        onPress={this.login}
                        style={{
                            width:'60%',
                            height:40,
                            marginTop:30,
                            marginLeft:100,
                            alignItems:'center',
                            backgroundColor:'red',
                            borderRadius:10,
                            justifyContent:'center'
                        }}
                    >
                        <Text style={{color:'white',fontSize:20,}}>登    录</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={Actions.logon}
                        style={{
                            
                            marginTop:36,
                            marginLeft:20,
                            alignItems:'center',
                           
                            justifyContent:'center'
                        }}
                    >
                        <Text style={{color:'grey',fontSize:17,}}>点击注册</Text>
                    </TouchableOpacity>
                </View>
                    </View>
               
                {
                    this.state.isloading
                    ?ToastAndroid.show('正在登录',100)
                    :null
                }
            </View>
            
        )
    }
}