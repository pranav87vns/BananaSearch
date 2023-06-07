import {ReactNode} from 'react';
import {
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  ViewStyle,
} from 'react-native';

export const Layout = (
  props: ScrollViewProps &
    ViewStyle & {children?: ReactNode; containerStyles?: ViewStyle},
) => {
  return (
    <SafeAreaView style={{flex: 1, ...props?.containerStyles}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={props.refreshControl}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: 24,
          ...props,
        }}>
        {props?.children}
      </ScrollView>
    </SafeAreaView>
  );
};
