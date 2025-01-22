import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import { MaterialIcons } from "@expo/vector-icons"; // For the dropdown arrow
import moment from "moment";
import Arrow from "../../assets/icons/arrow.svg"

const DateTimePickerInput = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [isPickerVisible, setPickerVisible] = useState(false);

  // Show & Hide Picker
  const showPicker = () => setPickerVisible(true);
  const hidePicker = () => setPickerVisible(false);

  // Handle Date Selection
  const handleConfirm = (selectedDate: Date) => {
    setDate(selectedDate);
    hidePicker();
  };

  return (
    <View style={styles.container}>
      {/* Touchable to Open Date Picker */}
      <TouchableOpacity onPress={showPicker} style={styles.input}>
        <Text style={styles.text}>
          {date ? moment(date).format("YYYY-MM-DD | HH:mm") : "Date | hour..."}
        </Text>
        <Arrow/>
      </TouchableOpacity>

      {/* Date Time Picker Modal */}
      {/* <DateTimePickerModal
        isVisible={isPickerVisible}
        mode='datetime' // You can change to "date" or "time"
        onConfirm={handleConfirm}
        onCancel={hidePicker}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:185,
    backgroundColor:"#FFFFFF"
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#eeeeee",
  },
  text: {
    fontSize: 14,
    color: "#000",
  },
});

export default DateTimePickerInput;
