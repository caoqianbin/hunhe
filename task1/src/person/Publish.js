import React, { Component } from 'react'
import Button from 'react-native-button'
import {
    View, 
    Text, 
    StyleSheet,
    Dimensions,
    AsyncStorage,
    ToastAndroid,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    BackHandler
} from 'react-native';
import { Actions } from 'react-native-router-flux';
const {width,scale} = Dimensions.get('window');
const s = width / 640;
const color1='red';
var bb='';
var oo=0;

export default class Publish extends Component {
    constructor(){
        super();
        this.state={
            data: [],
            nuum:'',
            color:['black','red'],
            top:0,
            page:1,
            numm:['已回复','待回复']
}    
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?limit=10&&page='+this.state.page)
        .then((res)=>res.json())
        .then((res)=>{            
            this.setState({data:res.data})           
        })
        bb='';
        for(var i=0;i<10;i++){
            bb = bb+parseInt(Math.random()* 2);
                    
        }
        
    }
    componentDidUpdate(){
        
        fetch('https://cnodejs.org/api/v1/topics?limit=10&&page='+this.state.page)
        .then((res)=>res.json())
        .then((res)=>{            
            this.setState({data:res.data})           
        })
    }
    change(){
        
        // num= ''+parseInt(Math.random()* 2);
        // console.log(num);
        // if(num==0)
        // {
        //     this.setState({num:'已回复',color:'black'});            
        // }
        // else{
        //     this.setState({num:'待回复',color:'red'});
        // }
        // console.log("我是啦啦啦")
    }
    shang =() =>{
        bb='';
        for(var i=0;i<10;i++){
            bb = bb+parseInt(Math.random()* 2);
                     
        }
        var pagee=this.state.page;
        if(pagee == 1)
        {
            ToastAndroid.show('这是第一页', ToastAndroid.SHORT)
        }
        else{
            pagee--;
            this.setState({
                page:pagee
            })  
        }
        
    }
    xia=()=>{
        bb='';
        for(var i=0;i<10;i++){
            bb = bb+parseInt(Math.random()* 2);
                   
        }
        var pagee=this.state.page;
        pagee++;
        this.setState({
            page:pagee
        })
    }
    render() {
        
        return (
            <View>
               
                <View style={styles.header}>
                    <TouchableOpacity onPress={Actions.pop}>
                        <Image source={require('../../assets/zuo.png')}
                     style={{width:20,height:25,marginTop:8,marginLeft:6}}/>
                    </TouchableOpacity>
                    
                     <Text style={{marginLeft:220*s,fontSize:30,color:'white'}}>我的发布</Text>
                     <Text style={{marginLeft:188*s,marginTop:-16,fontSize:40,color:'white'}}>...</Text>
                </View>
                <View style={{width:'100%',height:600}}>
                    <View style={[styles.mm,{marginTop: this.state.top}]} >
                    {
                        this.state.data.map((item,oo)=>(
                           
                            <View style={styles.cc}>
                                <Text style={{width:250,height:24,fontSize:20,marginLeft:20}}>
                                    {item.title?(item.title.length>15?item.title.substr(0,15)+"...":item.title):''}</Text>
                                <Text style={{marginLeft:100,fontSize:20}}>{item.create_at?item.create_at.substr(0,10):''}</Text>
                                <Text ref = {()=>this.change()} style={[{fontSize:16,marginTop:3,marginLeft:10,color: this.state.color[bb[oo]]}]}>{this.state.numm[bb[oo]]}</Text>
                            </View>
                            
                        ))
                    }
                    
                    
                    </View>
                </View>
                <View style={{flexDirection: 'row',}}>
                     <Button onPress={() => this.shang()} style={styles.shang}>上一页</Button>
                <Text style={{marginLeft:80,marginTop:8,marginRight:50,fontSize:20}}>第{this.state.page}页</Text>
                    <Button onPress={() => this.xia()} style={styles.shang}>下一页</Button>
                </View>
               
                
                
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    header:{
        width:'100%',
        height: 70*s,        
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1/3,
        flexDirection: 'row',
        backgroundColor:'#f23030'
    },
    mm:{
        width:'100%',
        height:600
    },
    cc:{
        paddingBottom:10,
        marginTop:20,
        flexDirection: 'row',
        borderBottomWidth:1,
        borderBottomColor:'#efefef',
        borderStyle:'dashed'
    },
    shang:{
        width:130,
        height:40,
        paddingTop:3,
        color:'white',
        fontSize:20,
        marginLeft:30,
        borderRadius:30,
        backgroundColor:'#f23030'
    }
})
