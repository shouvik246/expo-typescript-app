import React from "react";
import { ButtonView, ButtonLayout, ButtonText } from "./CustomButtonStyle";
import { useNavigation } from "@react-navigation/native";

type Prop = {
  title: string;
  icon?: any;
  submit?: boolean;
  toPage?: string;
  handleSubmit?: (val: string) => void;
}

const CustomButton = ({ title, icon, submit, toPage, handleSubmit }: Prop) => {
  const navigation = useNavigation();
  const goToFeedBack = () => {
    navigation.navigate(toPage, {});
  };
  const goToSubmit = () => {
    console.log(toPage);
    navigation.navigate(toPage,  { handleSubmit });
  };
  return (
    <ButtonLayout
      onPress={
        submit
          ? () => {
              goToSubmit();
            }
          : () => {
              goToFeedBack();
            }
      }
    >
      <ButtonView>
        {icon}
        <ButtonText>{title}</ButtonText>
      </ButtonView>
    </ButtonLayout>
  );
};

export default CustomButton;
