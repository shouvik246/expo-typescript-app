import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const CheckBoxMainContainer = styled.ScrollView`
  display: flex;
  flex-direction: column;
`;

export const RadioQuestionTitle = styled.Text`
  text-transform: capitalize;
  font-family: OpenSansRegular;
  font-size: 22px;
  margin: 0px 20px 0px;
`;
export const RadioOptinsContainer = styled.View`
  background-color: "#0b2a7d";
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  margin-left: 10px;
`;
export const TextStyle = styled.Text`
  text-transform: capitalize;
  font-size: 18px;
  font-family: OpenSansRegular;
`;
