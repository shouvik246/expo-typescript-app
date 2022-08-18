import { View, Text, TouchableWithoutFeedback, Pressable } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import {
  CheckBoxMainContainer,
  RadioOptinsContainer,
  RadioQuestionTitle,
  TextStyle,
} from "./CustomCheckBoxStyle";
import { RadioButton } from "react-native-paper";

type Props = {
  title: string;
  options: string[];
  answer: string;
};

const CustomCheckBox = ({ title, options }: Props) => {
  const [value, setVal] = useState(options[0]);
  return (
    <CheckBoxMainContainer>
      <RadioQuestionTitle>{title}</RadioQuestionTitle>
      <RadioButton.Group
        onValueChange={(val) => {
          setVal(val);
        }}
        value={value}
      >
        {options.map((item, index) => {
          return (
            <RadioOptinsContainer key={index}>
              <RadioButton color="#1f4623" value={item} />
              <TextStyle>{item}</TextStyle>
            </RadioOptinsContainer>
          );
        })}
      </RadioButton.Group>
    </CheckBoxMainContainer>
  );
};

export default CustomCheckBox;
