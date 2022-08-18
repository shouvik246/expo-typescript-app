import { View, Text } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { CustomTextInputMainContaine, styles } from "./CustomTextInputStyle";

const CustomTextInput = () => {
  const [text, setText] = useState("");
  console.log(text);
  const input = React.createRef();
  return (
    <CustomTextInputMainContaine >
      <TextInput
        mode="outlined"
        label={"TextBox"}
        outlineColor="#103619"
        value={text}
        onChangeText={(text) => setText(text)}
        activeOutlineColor={"#103619"}
        autoComplete={"street-address"}
        style = {styles.textInputStyle}
      />
    </CustomTextInputMainContaine>
  );
};

export default CustomTextInput;
