import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text,Image,AsyncStorage,ToastAndroid,BackHandler} from 'react-native';
import {Router,Scene, Tabs,Drawer,Lightbox, Modal, Overlay,Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Test from './src/goods/Test';
import Goods from './src/home/Home';
import Person from './src/person/Person';
import Publish from './src/person/Publish';
import SplashScreen from 'react-native-splash-screen'
import Login from './src/common/Login';
import SwiperPage from './src/common/SwiperPage';
import logon from './src/common/logon';
console.disableYellowBox = true
const App = () => {
	let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
    
		init();
	},[])
	let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
	}
	// if(isInstall){
	// 	return <View style={{flex:1}}>
	// 		<SwiperPage afterInstall={afterInstall}/>
	// 	</View>
	// }
    return(
      <Router 
      backAndroidHandler={()=>{
				if(Actions.currentScene == 'home' || Actions.currentScene == 'login'){
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
				
			}}
      >
        <Overlay >
        {/* Router里边只能放一个组件 将全部放到root下*/}
          <Modal key='modal'  hideNavBar>
            
            <Lightbox  key='lightbox' hideNavBar>
            {/* 包含所有元素 可自定义大小 */}
              
                  <Scene  key="root">
                    
                      <Tabs 
                        key='tabbar' 
                        hideNavBar 
                        
                        activeTintColor='red'
                        inactiveTintColor='#515151'
                        tabBarStyle={{backgroundColor:'#fffff'}}
                      >  
                      {/*hideNavBar去掉原本tab栏*/}
                        {/* 首页 */}
                        <Scene 
                            key='首页'
                           
                            icon={
                              
                              ({focused})=><Image 
                              source={focused?require('./assets/home1.png'):require('./assets/home.png')}
                              style={{width:22,height:22}}
                              color={focused?'red':'#515151'} 
                                />
                            }                                         
                        >
                          {/* <Scene key='home' component={Home}/>
                          <Scene key='home' component={LocalPage}/>
                           */}
                           <Scene key='home'  hideNavBar hideNavBar hideDrawerButton   component={Goods}/>
                          
                        </Scene>
                        {/* 商品分类 */}
                        <Scene 
                            key='商品分类'
                            style={{color:'#515151'}}
                            icon={
                                ({focused})=><Image 
                                source={focused?require('./assets/fen1.png'):require('./assets/fen.png')}
                                style={{width:22,height:22}}
                                color={focused?'red':'#515151'} 
                                
                                    
                                />
                            }                                         
                        >
                          {/* <Scene key='home' component={Home}/>
                          <Scene key='home' component={LocalPage}/>
                           */}
                           <Scene key='test' hideNavBar hideDrawerButton   component={Test}/>
                          
                        </Scene>
                          
                         

                        
                        {/* 文档栏   如果只有一个组件,可以将 component={Doc}直接写在Scene里 */}
                        <Scene 
                            key='个人中心'
                           
                            icon={
                              ({focused})=><Image 
                              source={focused?require('./assets/per1.png'):require('./assets/per.png')}
                              style={{width:22,height:22}}
                              color={focused?'red':'#515151'} 
                                />
                            }                                         
                        >
                          {/* <Scene key='home' component={Home}/>
                          <Scene key='home' component={LocalPage}/>
                           */}
                           <Scene key='person' hideNavBar hideDrawerButton   component={Person}/>
                           <Scene key='publish' hideNavBar hideTabBar hideDrawerButton component={Publish}/>
                        </Scene>
                      </Tabs>
                      
                  </Scene>
              
              
            </Lightbox>
            <Scene initial={!isLogin} key="login" component={Login}/>
            <Scene key="logon" component={logon}/>
            
          </Modal>
          
        </Overlay>
      </Router>
      
    )
}
const styles = StyleSheet.create({

})
export default App;
