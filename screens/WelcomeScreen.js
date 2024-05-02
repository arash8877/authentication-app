import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../store/auth-context";
const messageUrl =
  "https://react-native-expense-app-afc58-default-rtdb.europe-west1.firebasedatabase.app/message.json?auth=";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState("");
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(messageUrl + token);
        setFetchedMessage(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
