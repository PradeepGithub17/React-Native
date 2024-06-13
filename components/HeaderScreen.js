import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import { TabNavigation } from './TabNavigation';
import Colors from '../utills/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function HeaderScreen() {
  return (
    <View style={style.container}>
        <View style={style.box}>
            <View style={style.profile}>
                <Text>PG</Text>
            </View>
            <View style={style.bellIconWrap}>
              <FontAwesome name="bell-o" size={24} color="white" />
            </View>
        </View>
        <View style={style.searchBox} >
          <TextInput style={style.search} placeholder='Search...' />
            <View style={style.searchIconWrap}>
            <FontAwesome  style={style.searchIcon} name="search" size={24} color={Colors.PRIMARY} />
            </View>
        </View>
    </View>
  );
}

const style  = StyleSheet.create({
  container : {
    marginTop : 50,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    padding: 20,
    alignContent: 'center'
  },
  box:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },
  profile:{
    padding: 20,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
  },
  bellIconWrap : {
    marginTop: 20,
  },
  searchBox: {
    display : 'flex',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  search : {
    width: "85%",
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 4
  },
  searchIconWrap: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    textAlign: 'center',
    borderBlockColor: Colors.BLACK,
    borderRadius: 5,
  },

})

export default HeaderScreen