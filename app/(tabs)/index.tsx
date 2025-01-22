import {
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import FilterIcon from "../../assets/icons/filter.svg";
import DateTimePickerInput from "@/components/ui/DateTimePickerInput";
import GameCardSecond from "@/components/ui/GameCardSecond";
export default function HomeScreen() {
  return (
    <ScrollView style={{ backgroundColor: "#FCFAFA",flex:1 }}>
      <View style={styles.headerBox}>
        <FilterIcon />
        <DateTimePickerInput />
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Doubles games</Text>
          </TouchableOpacity>
        </View>
        <GameCardSecond />
        <View style={{height:20}}/>
        <GameCardSecond />
        <View style={{height:20}}/>
        <GameCardSecond />
        <View style={{height:20}}/>
        <GameCardSecond />
        <View style={{height:20}}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerBox: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: "#145E94",
    height: 34,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    paddingHorizontal: 12,
  },
  btnText: {
    fontSize: 14,
    color: "#145E94",
  },
});
