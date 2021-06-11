import React, { Component } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { ActionBottomTabParamList } from "../navigation/ActionBottomTabNavigator";
import { View, Text } from "react-native";

export type ReportProps = StackScreenProps<ActionBottomTabParamList, "Report">;

export default class Report extends Component<ReportProps> {
  render() {
    return (
      <View>
        <Text>Report</Text>
      </View>
    );
  }
}