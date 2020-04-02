import React, { Component } from 'react'
import ImagePicker from 'react-native-image-crop-picker';
import {
    View, 
    Text, 
    StyleSheet,
    Dimensions,
    AsyncStorage,   
    Image,      
   TouchableOpacity,
    ScrollView,
    
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { WhiteSpace } from '@ant-design/react-native';

const {width,scale} = Dimensions.get('window');
const s = width / 640;

export default class Person extends Component {
    constructor(){
        super();
        this.state={
            uri:''
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('object').then((value)=>{
            const data = JSON.parse(value);
            if(data == null)
            {
                this.setState({
                    uri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=940402483,761163297&fm=15&gp=0.jpg'
                })
                
            }
            else{
                 this.setState({
                    uri:data
                })
            }
               
            
            
        })
    }
    componentDidUpdate(){
        AsyncStorage.getItem('object').then((value)=>{
            const data = JSON.parse(value);
            
            if(data=="")
            {
                this.setState({
                    uri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=940402483,761163297&fm=15&gp=0.jpg'
                })
            }
        })
        
    }
    
    takephoto = ()=>{
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            // this.setState({uu:"{"+'uri:'+"'"+image.path+"'"+"}"});
            this.setState({uri:image.path});
            
            AsyncStorage.removeItem('object');
            AsyncStorage.setItem('object',JSON.stringify(this.state.uri))
            
            
          });
          
        }
        tui =() =>{
            AsyncStorage.clear();
            Actions.login();
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
            <View>
                <ScrollView>
                    <View style={{width:'100%',height:250*s,backgroundColor:'#f23030',
                    alignItems:'center'}}>
                        <TouchableOpacity onPress={this.tui} style={{marginLeft:500*s,marginTop:10}}>
                            <Text style={{color:'white',fontSize:18,}}>退出登录</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.takephoto}>
                        <Image source={{uri:this.state.uri}}
                style={{width:120*s,height:120*s,marginTop:27,marginLeft:12,borderRadius:60*s}}/>
                {/* <Image source={{uri:this.state.uri}} 
                style={{width:120*s,height:120*s,marginTop:47,marginLeft:12,borderRadius:60*s}}/> */}
                        </TouchableOpacity>
                        
                             <Text style={{marginTop:20,fontSize:20,color:'white'}}>BINNU DHILLON</Text>
                        
                       
                       
                        
                       
                    </View>
                    <Image source={require('../../assets/tiao.png')}
                        style={{width:'100%',height:120*s,marginLeft:0,}}/>
                    <View>
                    
                    <View style={{flexDirection: 'row'}}>
                        <Image source={require('../../assets/ge1.png')}
                        style={{width:50*s,height:50*s,marginTop:20,
                        marginLeft:12}}/>
                        <Text style={{marginTop:25,marginLeft:20,color:'#4f4e4e',fontSize:23}}>我的个人中心</Text>
                    </View>
                    <View style={styles.la}></View>
                    </View>
                    <View>
                        <View style={{marginLeft:10,flexDirection: 'row'}}>
                            <Image source={require('../../assets/she.png')}
                            style={{width:40*s,height:40*s,marginTop:35,
                            marginLeft:80}}/>
                            
                             <Image source={require('../../assets/di.png')}
                            style={{width:40*s,height:40*s,marginTop:35,
                            marginLeft:120}}/>
                            
                            <Image source={require('../../assets/ming.png')}
                            style={{width:40*s,height:40*s,marginTop:35,
                            marginLeft:125}}/>
                          
                        </View>
                        <View style={{marginLeft:60,marginTop:17,flexDirection: 'row'}}>
                            <Text style={{fontSize:20,marginLeft:5}}>账户管理</Text>
                            <Text style={{fontSize:20,marginLeft:80}}>收货地址</Text>
                            <Text style={{fontSize:20,marginLeft:80}}>我的信息</Text>
                        </View>
                        <View style={{marginLeft:10,flexDirection: 'row'}}>
                            <Image source={require('../../assets/ding.png')}
                            style={{width:40*s,height:40*s,marginTop:35,
                            marginLeft:80}}/>
                            
                             <Image source={require('../../assets/er.png')}
                            style={{width:40*s,height:40*s,marginTop:35,
                            marginLeft:120}}/>
                            
                            <Image source={require('../../assets/ji.png')}
                            style={{width:40*s,height:40*s,marginTop:35,
                            marginLeft:125}}/>
                          
                        </View>
                        <View style={{marginLeft:60,marginTop:17,flexDirection: 'row'}}>
                            <Text style={{fontSize:20,marginLeft:5}}>我的订单</Text>
                            <Text style={{fontSize:20,marginLeft:80}}>我的二维码</Text>
                            <Text style={{fontSize:20,marginLeft:63}}>我的积分</Text>
                        </View>
                        <View style={{marginLeft:10,flexDirection: 'row'}}>
                            <Image source={require('../../assets/shou.png')}
                            style={{width:40*s,height:40*s,marginTop:35,
                            marginLeft:80}}/>   
                        </View>
                        <View style={{marginLeft:60,marginTop:17,flexDirection: 'row'}}>
                            <Text style={{fontSize:20,marginLeft:5}}>我的收藏</Text>
                        </View>
                    </View>
                    <View style={{marginTop:15,borderWidth:4,
                    borderStyle: "solid",borderColor:'#e0e0e0'}}></View>
                     <View style={{flexDirection: 'row'}}>
                        <Image source={require('../../assets/11.png')}
                        style={{width:50*s,height:50*s,marginTop:20,
                        marginLeft:12}}/>
                        <Text style={{marginTop:25,marginLeft:20,color:'#4f4e4e',fontSize:23}}>E族活动</Text>
                    </View>
                    <View style={styles.la}></View>
                    <View style={{marginLeft:10,flexDirection: 'row'}}>
                            <Image source={require('../../assets/22.png')}
                            style={{width:40*s,height:40*s,marginTop:35,
                            marginLeft:80}}/>
                            
                             <Image source={require('../../assets/33.png')}
                            style={{width:40*s,height:40*s,marginTop:35,
                            marginLeft:120}}/>
                            
                            <Image source={require('../../assets/ge1.png')}
                            style={{width:40*s,height:40*s,marginTop:35,
                            marginLeft:125}}/>
                          
                        </View>
                        <View style={{marginLeft:60,marginTop:17,flexDirection: 'row'}}>
                            <Text style={{fontSize:20,marginLeft:5}}>居家维修保养</Text>
                            <Text style={{fontSize:20,marginLeft:40}}>出行接送</Text>
                            <Text style={{fontSize:20,marginLeft:75}}>我的受赠人</Text>
                        </View>
                        <View style={{marginLeft:10,flexDirection: 'row'}}>
                            <Image source={require('../../assets/44.png')}
                            style={{width:40*s,height:40*s,marginTop:35,
                            marginLeft:80}}/>
                            
                             <Image source={require('../../assets/55.png')}
                            style={{width:40*s,height:40*s,marginTop:35,
                            marginLeft:120}}/>
                            <TouchableOpacity onPress={()=>Actions.publish()}>
                                <Image source={require('../../assets/66.png')}
                            style={{width:40*s,height:40*s,marginTop:35,
                            marginLeft:125}}/>
                            </TouchableOpacity>
                           
                          
                        </View>
                        <View style={{marginLeft:60,marginTop:17,flexDirection: 'row'}}>
                            <Text style={{fontSize:20,marginLeft:5}}>我的住宿优惠</Text>
                            <Text style={{fontSize:20,marginLeft:40}}>我的活动</Text>
                            <TouchableOpacity  onPress={()=>Actions.publish()}>
                                <Text style={{fontSize:20,marginLeft:75}}>我的发布</Text>
                            </TouchableOpacity>
                                
                            
                            
                        </View>
                        <View style={{height:100,width:"100%",marginTop:10,
                    backgroundColor:'#eeeeee',alignItems:'center',}}>
                        <Text style={{marginTop:35,fontSize:20,color:'#5e5d5d'}}>BINNU DHILLON | 退出</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    la:{
        marginTop:15,
        borderWidth:0.4,
        borderStyle: "solid",
        borderColor:'#c1bfbf'
    }
})