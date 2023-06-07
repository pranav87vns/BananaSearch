import {TextInput, View} from 'react-native';
import {Dispatch, SetStateAction} from 'react';
import {
  KeyboardTypeOptions,
  TextInputIOSProps,
  TextInputProps,
} from 'react-native';
import {styles} from './styles';
import {SearchIcon} from '../../images/svg';

export const Input = ({
  placeholder,
  value,
  setValue,
  onChange,
  inputStyle,
  disabled,
  number = false,
  strLength,
  textContentType = 'none',
  keyboardType,
}: {
  placeholder?: string;
  value?: string;
  setValue: Dispatch<SetStateAction<string>>;
  onChange?: (value: string) => void;
  inputStyle?: TextInputProps;
  disabled?: boolean;
  number?: boolean;
  strLength?: number;
  textContentType?: TextInputIOSProps['textContentType'];
  keyboardType?: KeyboardTypeOptions;
}) => {
  const onChangeText = onChange ? onChange : (text: string) => setValue(text);
  const {txtInputStyle, containerStyle, searchIcon} = styles;

  return (
    <View style={containerStyle}>
      <SearchIcon />
      <TextInput
        clearButtonMode="always"
        value={value}
        keyboardType={
          keyboardType ? keyboardType : number ? 'number-pad' : 'default'
        }
        maxLength={strLength}
        placeholderTextColor={'#9E9E9E'}
        placeholder={placeholder}
        style={txtInputStyle}
        autoCapitalize="none"
        onChangeText={onChangeText}
        editable={!disabled}
        selectTextOnFocus={disabled}
        textContentType={textContentType}
      />
    </View>
  );
};
