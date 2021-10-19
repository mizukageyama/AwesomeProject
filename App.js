
import React,{Component, useState}  from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text, TouchableOpacity, View,
  ImageBackground,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const SCREEN_WIDTH = Dimensions.get('window').width;
const App = () => {
  const [financeCourse, setFinanceCourse] = useState([
    {imgURL: 'https://mlzhoe0eeuaz.i.optimole.com/BX4Mchw.ENaZ~36f8d/w:300/h:300/q:90/rt:fill/g:ce/https://wealtheo.com/wp-content/uploads/2021/08/Practical-Ways-to-Reduce-Your-Everyday-Expenses-Featured-e1632832141524.jpg', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
    {imgURL: 'https://mlzhoe0eeuaz.i.optimole.com/BX4Mchw.ENaZ~36f8d/w:300/h:300/q:90/rt:fill/g:ce/https://wealtheo.com/wp-content/uploads/2021/08/The-Power-of-Setting-Financial-Goals-Featured-e1632839606373.jpg', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
    {imgURL: 'https://mlzhoe0eeuaz.i.optimole.com/BX4Mchw.ENaZ~36f8d/w:300/h:300/q:90/rt:fill/g:ce/https://wealtheo.com/wp-content/uploads/2021/08/5-proven-Ways-To-Change-Your-Buying-Habits-Featured-e1632833806606.jpg', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
    {imgURL: 'https://mlzhoe0eeuaz.i.optimole.com/BX4Mchw.ENaZ~36f8d/w:300/h:300/q:90/rt:fill/g:ce/https://wealtheo.com/wp-content/uploads/2021/08/FINDING-HIDDEN-FINANCIAL-GEMS-IN-CELL-PHONE-PLANS-Featured-e1632838671139.jpg', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
  ]);
  
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{flex: 1,}}>
          <ImageBackground source={require('./assets/header_image.png')} style={{width: '100%', height: 260 }} resizeMode='stretch'/>
          <View style={{backgroundColor: '#000000', flexDirection: 'row', justifyContent: 'center', paddingTop: 10, paddingBottom: 20}}>
              <TouchableOpacity style={{ height: 25 , backgroundColor:'#0175c1'}}>
                <Text style={{padding:5, fontSize:11, color: '#fff', fontWeight:'600'}}>LEARN MORE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft:70, padding:5, height: 25 , backgroundColor:'#0175c1'}}>
                <Text style={{color: '#fff',   fontSize:11, fontWeight:'600'}}>LEARN MORE</Text>
              </TouchableOpacity>
            </View>
          
          <View style={{width: SCREEN_WIDTH,backgroundColor: '#8d773e', paddingVertical: 5}}>
            <Text style={{color: '#fff',fontSize: 17,  fontWeight:'bold', textAlign: 'center'}}>NEWEST PERSONAL FINANCIAL COURSE</Text>
                {financeCourse.map((item, index) => (
                  <View key={index} style = {{paddingHorizontal: 22}}>
                    {index === financeCourse.length-1? <FinancialCourseCard imgURL = {item.imgURL} desc = {item.desc} hasDivider = {false}/>: <FinancialCourseCard imgURL = {item.imgURL} desc = {item.desc} hasDivider = {true}/>}
                  </View>
                ))}
            <TouchableOpacity style={{marginTop:12, marginBottom: 5, alignSelf: 'center', justifyContent:'center', alignContent:'center',  alignItems:'center', height: 34, width:170, backgroundColor:'#0175c1'}}>
                <Text style={{color: '#fff',  fontSize:15, fontWeight:'400'}}>SEE MORE COURSES</Text>
              </TouchableOpacity>
          </View>
          <View style={{backgroundColor: '#000000', height: 200}}>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

function FinancialCourseCard (props){
  const { imgURL, desc, hasDivider} = props;
  return (
    <View>
      <View style={{width:'100%', flexDirection: 'row', alignItems:'center', marginTop: 8}}>
        <Image source={{uri: imgURL}} style={{width: 75, height: 75 }} resizeMode='cover'/>
        <View style={{width: SCREEN_WIDTH - 134, marginLeft:15}}>
          <Text style={{flex: 1, color: '#fff', fontSize: 15, flexWrap: 'wrap', alignItems: 'flex-start'}} numberOfLines={2}>{desc}</Text>
          <TouchableOpacity style ={{marginTop: 8 , width: 102}}>
            <LinearGradient colors={['#56a0d0','#3d8acb', '#154aa1']} style={{ flex: 1, height: 28, alignItems:'center', justifyContent:'center'}}>
              <View style={{flexDirection: 'row', alignItems:'center' }}>
                    <Text style={{color:'#fff', fontWeight:'600'}}>Learn more</Text>
                    <Icon name="caret-forward-sharp" style = {{paddingLeft: 4}} color={'#fff'} size={14}/>
                  </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      {hasDivider === true? <View style={{alignSelf: 'center', marginTop: 8, borderBottomColor: '#6d5623', borderBottomWidth: 1.5, width: '70%'}}/>:null}
    </View>
  );
}
