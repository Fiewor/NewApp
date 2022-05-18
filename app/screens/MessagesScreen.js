import { StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/boy.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/girl.png"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
    // Call the server to delete the message from the backend
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(`Message Sent`, item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
