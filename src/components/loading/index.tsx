import {Text, View} from 'react-native';

export const Loading = ({
    status
  }:{status:boolean}) => {
    
  
    return (
        status && <View >
        {(<Text > Loading.. </Text >)}
      </View>
    );
  };
  
  export default Loading 