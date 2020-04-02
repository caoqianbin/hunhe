import React, { Component } from 'react'
import {
    View, 
    Text, 
    StyleSheet,
    Dimensions,
    AsyncStorage,
    Button,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    BackHandler
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Carousel } from '@ant-design/react-native';
const {width,scale} = Dimensions.get('window');
const s = width / 640;




export default class Test extends Component {
    constructor(){
        super();
        this.state = {
            tits: []
        }
    }
    backAndroidHandler=()=>{
        if(Actions.currentScene == 'home'){
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
            
            <ScrollView scrollEnabled={true} style={{flex: 1}}>
            <StatusBar backgroundColor={'#f23030'} />
            <View style={{width:'100%',flex: 1,backgroundColor: '#fff'}}>
                <View style={styles.header}>
                    <View style={styles.search}>
                        <Image source={require('../../assets/sou1.png')}
                         style={{width:20,height:20,marginLeft:26}}/>
                        <TextInput 
                            placeholder="请您要搜索的关键字"
                            placeholderTextColor="white"
                           
                            style={{
                                fontSize:16,
                                width: 490*s,height: 70*s,
                                padding: 0,
                                paddingLeft: 15,
                            }}
                        />
                        <Image source={require('../../assets/gou.png')}
                         style={{width:25,height:25,marginLeft:0}}/>
                    </View>
                </View>
                <Carousel
                    style={styles.wrapper}
                    selectedIndex={2}
                    autoplay
                    infinite
                    afterChange={this.onHorizontalSelectedIndexChange}
                >
                     <View
                    >
                     <Image source={require('../../assets/lun.png')}
                            style={{width:640*s,height:260*s,marginLeft:0}}/>
                    </View>
                    <View
                    >
                     <Image source={require('../../assets/lun.png')}
                            style={{width:640*s,height:260*s,marginLeft:0}}/>
                    </View>
                    <View
                    >
                     <Image source={require('../../assets/lun.png')}
                            style={{width:640*s,height:260*s,marginLeft:0}}/>
                    </View>
                </Carousel>
                
                
                <View style={{width:'100%',height:1000*s,backgroundColor:'#ededed'}}>
                    <View style={{width:'100%',height:140*s,marginTop:10,backgroundColor:'white',flexDirection: 'row',}}>
                        <Image source={require('../../assets/biao1.png')}
                        style={{width:120*s,height:120*s,marginTop:7,marginLeft:12}}/>
                        <Text style={{marginLeft:40,marginTop:35,fontSize:26,color:'#696868'}}>居家维修保养</Text>
                        <Image source={require('../../assets/you.png')}
                        style={{width:30*s,height:40*s,marginTop:35,marginLeft:230*s}}/>
                    </View>
                    <View style={{width:'100%',height:140*s,marginTop:10,backgroundColor:'white',flexDirection: 'row',}}>
                        <Image source={require('../../assets/biao2.png')}
                        style={{width:120*s,height:120*s,marginTop:7,marginLeft:12}}/>
                        <Text style={{marginLeft:40,marginTop:35,fontSize:26,color:'#696868'}}>住宿优惠</Text>
                        <Image source={require('../../assets/you.png')}
                        style={{width:30*s,height:40*s,marginTop:35,marginLeft:288*s}}/>
                    </View>
                    <View style={{width:'100%',height:140*s,marginTop:10,backgroundColor:'white',flexDirection: 'row',}}>
                        <Image source={require('../../assets/biao3.png')}
                        style={{width:120*s,height:120*s,marginTop:7,marginLeft:12}}/>
                        <Text style={{marginLeft:40,marginTop:35,fontSize:26,color:'#696868'}}>出行接送</Text>
                        <Image source={require('../../assets/you.png')}
                        style={{width:30*s,height:40*s,marginTop:35,marginLeft:288*s}}/>
                    </View>
                    <View style={{width:'100%',height:140*s,marginTop:10,backgroundColor:'white',flexDirection: 'row',}}>
                        <Image source={require('../../assets/biao4.png')}
                        style={{width:120*s,height:120*s,marginTop:7,marginLeft:12}}/>
                        <Text style={{marginLeft:40,marginTop:35,fontSize:26,color:'#696868'}}>E族活动</Text>
                        <Image source={require('../../assets/you.png')}
                        style={{width:30*s,height:40*s,marginTop:35,marginLeft:296*s}}/>
                    </View>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity>
                        <Text style={{color:'white',fontSize:25,marginTop:10}}>发布需求</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{marginLeft:'35%',marginTop:60,fontSize:20,
                marginBottom:10,color:'#8a8989'}}>©E族之家 版权所有</Text>
                
               
                
                
            </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    header:{
        width:'100%',
        height: 80*s,
        
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1/3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#f23030'
    },
    search:{
        width: '80%',
        height: 50*s,
        borderRadius:30,
        backgroundColor: '#fbb8b8',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:-35
        
    },
    nav:{
        backgroundColor:'red',
        width:'100%',
        height: 260*s,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    
    btn:{
        height:70*s,
        width:540*s,
        backgroundColor:'red',
        marginLeft:50,
        marginTop:-300,
        color:'white',
        borderRadius:13,
        textAlign: 'center',
        alignItems: 'center'
    },
})