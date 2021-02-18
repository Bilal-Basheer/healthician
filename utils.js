import AsyncStorage from '@react-native-community/async-storage';
const getUserdata=async (success, errorr)=> {
        try {
            var Userdata = await AsyncStorage.getItem('@Userdata:key');
            if (Userdata) {
                success(JSON.parse(Userdata))
            } else {
                errorr(null)
            }
        } catch (error) {
            errorr()
        }
    }
const setUserdata=async(data, success) =>{
        try {
            await AsyncStorage.setItem('@Userdata:key', JSON.stringify(data));
            success()
        } catch (error) {

        }
    }
    const resetUserdata = async (success, failed) => {
      try {
          alert("you are successfully Logout");
        await AsyncStorage.removeItem('@Userdata:key');
        success();
      } catch (error) {failed()}
    };
export {getUserdata, setUserdata, resetUserdata};