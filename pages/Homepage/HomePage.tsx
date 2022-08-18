import { View } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import { HomeMainContainer, LanguageText } from "./HomPageStyle";
import Icon from "react-native-vector-icons/FontAwesome5";

const HomePage = () => {
  const myIcon = <Icon name="list-alt" size={24} color="#ffffff" />;
  return (
    <HomeMainContainer>
      <LanguageText>Select Your Language</LanguageText>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CustomButton title={"English"} icon={myIcon} toPage={"FeedBack"} />
        <CustomButton title={"Hindi"} icon={myIcon} toPage={"FeedBack"} />
      </View>
    </HomeMainContainer>
  );
};

export default HomePage;
