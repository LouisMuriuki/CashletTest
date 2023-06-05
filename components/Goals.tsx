import {FlatList, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {DarkBlueGreycolor, GreenColor, LightBlueGreycolor} from '../constants';
import Button from './reusables/Button';
import {useContext} from 'react';
import {SnackBarContext} from '../context/SnackBarContext';
interface GoalProps {
  title: string;
  value: number;
  id: number;
}

const CashGoals = [
  {
    title: 'Goal 1',
    value: 12000,
    id: 1,
  },
  {
    title: 'Goal 2',
    value: 12000,
    id: 2,
  },
];

const renderItem = ({item}: {item: GoalProps}) => {
  return (
    <View style={styles.container}>
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.leftInnerContainer}>
            <View
              style={{
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                paddingVertical: 5,
              }}>
              <Text
                style={{
                  color: DarkBlueGreycolor,
                  fontFamily: 'Montserrat-Regular',
                  fontWeight: 'bold',
                }}>
                {item?.title}
              </Text>
              <Text style={{color: LightBlueGreycolor}}>
                KES {item?.value.toLocaleString()}
              </Text>
            </View>
            <View
              style={{
                alignSelf: 'center',
                backgroundColor: GreenColor,
                padding: 4,
                borderRadius: 5,
                marginRight: 10,
              }}>
              <Text style={{color: '#fff'}}>Finish Goal</Text>
            </View>
          </View>
          <View style={styles.rightInnerContainer}>
            <Icon name="right" size={20} color={DarkBlueGreycolor} />
          </View>
        </View>
      </View>
    </View>
  );
};

const Goals = () => {
  const {setSnackVisible} = useContext(SnackBarContext);
  const showSnackBar = () => {
    setSnackVisible(true);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={{flex: 1}}>
        <Text
          style={{
            color: DarkBlueGreycolor,
            fontSize: 18,
            marginBottom: 10,
            paddingHorizontal: 15,
            fontFamily: 'Montserrat-Regular',
            fontWeight: 'bold',
          }}>
          Your Goals
        </Text>
        <FlatList
          data={CashGoals}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
        />
      </View>
      <View style={{marginBottom: 25}}>
        <Button
          text="Show Snackbar"
          onPress={() => showSnackBar()}
          backgroundColor={GreenColor}
          height={45}
          alignItems="center"
          color={'#fff'}
          flexDirection="row"
          justifyContent="center"
          borderRadius={20}
          fontSize={16}
          rippleColor={'#64bc68'}
          width={'100%'}
          elevation={2}
        />
      </View>
    </View>
  );
};

export default Goals;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5ffff',
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  container: {
    marginBottom: 15,
    padding: 1,
  },
  outerContainer: {
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.24,
    elevation: 2,
  },
  innerContainer: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftInnerContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    borderRightWidth: 1,
    borderRightColor: '#dcdcdc',
  },
  rightInnerContainer: {
    alignSelf: 'center',
    marginLeft: 16,
  },
});
