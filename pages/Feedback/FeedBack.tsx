import React, { useCallback, useEffect, useRef, useState } from "react";
import CustomTextInput from "../../components/CutomTextInput/CustomTextInput";
import {
  FeedBackMainContainer,
  MainText,
  MainTextContainer,
} from "./FeedBackStyle";
import CustomCheckBox from "../../components/CustomRadioButton/CustomCheckBox";
import CustomButton from "../../components/CustomButton/CustomButton";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as data from "../../data.json";

const FeedBack = () => {
  const questions = data.questions;
  return (
    <FeedBackMainContainer>
      <MainTextContainer>
        <MainText>we care about your valuable feedback ..!!</MainText>
      </MainTextContainer>
      <CustomTextInput />
      {questions.map((item) => {
        return (
          <CustomCheckBox
            key={item.id}
            title={item.question_title}
            options={item.question_options}
            answer={item.answer}
          />
        );
      })}
      <CustomButton
        title={"Submit"}
        // icon={submitIcon}
        submit={true}
        toPage={"Submit"}
      />
    </FeedBackMainContainer>
  );
};

export default FeedBack;
