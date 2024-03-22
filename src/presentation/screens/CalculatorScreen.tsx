import React from 'react';
import {Text, View} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';
import Button from '../components/ui/Button';
import {useCalculator} from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const {operation, buildOperation, clean} = useCalculator();

  return (
    <View style={globalStyles.container}>
      <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        style={globalStyles.textTotal}>
        {operation}
      </Text>
      <Text style={globalStyles.subTotal}>20</Text>

      <View style={globalStyles.row}>
        <Button onPress={clean} text="C" color={colors.lightGray} />
        <Button
          onPress={() => console.log('+/-')}
          text="+/-"
          color={colors.lightGray}
        />
        <Button
          onPress={() => console.log('del')}
          text="del"
          color={colors.lightGray}
        />
        <Button
          onPress={() => console.log('÷')}
          text="÷"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <Button onPress={() => buildOperation('9')} text="9" />
        <Button onPress={() => buildOperation('8')} text="8" />
        <Button onPress={() => buildOperation('7')} text="7" />
        <Button
          onPress={() => console.log('X')}
          text="X"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <Button onPress={() => buildOperation('6')} text="6" />
        <Button onPress={() => buildOperation('5')} text="5" />
        <Button onPress={() => buildOperation('4')} text="4" />
        <Button
          onPress={() => console.log('-')}
          text="-"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <Button onPress={() => buildOperation('3')} text="3" />
        <Button onPress={() => buildOperation('2')} text="2" />
        <Button onPress={() => buildOperation('1')} text="1" />
        <Button
          onPress={() => console.log('+')}
          text="+"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <Button onPress={() => buildOperation('0')} text="0" size="double" />
        <Button onPress={() => buildOperation('.')} text="." />
        <Button
          onPress={() => console.log('=')}
          text="="
          color={colors.orange}
        />
      </View>
    </View>
  );
};

export default CalculatorScreen;
