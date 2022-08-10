import "@expo/match-media";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextProps,
  TextStyle,
  View,
} from "react-native";
import { useResponsiveScreen } from "./app/hook/useResponsiveScreen";
import {
  useFonts,
  Lexend_300Light,
  Lexend_500Medium,
  Lexend_400Regular,
  Lexend_700Bold,
} from "@expo-google-fonts/lexend";
import { useNavigation } from "@react-navigation/native";
import { forwardRef, useRef } from "react";

const inputStyle: TextStyle = {
  borderWidth: 0,
  borderBottomWidth: "1px",
  borderBottomColor: "#616E88",
  fontSize: "1.2rem",
};

const Input = forwardRef(
  ({ label, ...rest }: TextInputProps & { label: string }, ref) => (
    <View
      style={{
        marginTop: "3.5em",
      }}
    >
      <Text
        style={{
          fontFamily: "Lexend_500Medium",
          fontSize: "1.2rem",
          marginBottom: "1em",
        }}
      >
        {label}
      </Text>
      <TextInput
        ref={ref}
        {...rest}
        placeholderTextColor={"#616E884D"}
        style={StyleSheet.compose(rest.style, inputStyle)}
      />
    </View>
  )
);

const linkStyle: TextStyle = {
  color: "#086080",
  marginBottom: "1.5em",
  fontSize: 18,
  fontFamily: "Lexend_400Regular",
};

function Link(props: TextProps) {
  return (
    <Text
      {...props}
      accessibilityRole="link"
      style={StyleSheet.compose(linkStyle, props.style)}
    />
  );
}

export default function App() {
  const navigation = useNavigation();
  const emailRef = useRef<TextInput>();
  const talkRef = useRef<TextInput>();

  return (
    <View style={styles.container}>
      <Image
        style={{
          top: 0,
          right: 0,
          position: "absolute",
          width: 800,
          aspectRatio: 1,
        }}
        accessibilityLabel="Cuer Logo"
        accessibilityRole="image"
        source={require("./assets/bg2.png")}
      />
      <View
        style={{
          paddingHorizontal: "8.5em",
        }}
      >
        <Image
          style={{
            width: 100,
            height: 50,
          }}
          accessibilityLabel="Cuer Logo"
          accessibilityRole="image"
          source={require("./assets/cuer-logo-text.png")}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: "7em",
          }}
        >
          <Text style={styles.explainerTitle}>Contact us</Text>
          <View
            style={{
              width: "50em",
            }}
          >
            <Input
              onSubmitEditing={() => emailRef.current?.focus()}
              label="Name"
              placeholder="e.g. Adebayo Mustapha "
            />
            <Input
              onSubmitEditing={() => talkRef.current?.focus()}
              label="Email"
              placeholder="e.g. email@provider.com "
            />
            <Input
              label="Talk to us"
              placeholder="e.g. enquiries, needs, .et.c. "
            />

            <Pressable
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "11em",
                height: "4em",
                backgroundColor: "#3878B8",
                marginTop: "1.7em",
              }}
            >
              <Text
                style={{
                  fontFamily: "Lexend_500Medium",
                  color: "#FFFFFF",
                  fontSize: "1.2rem",
                }}
              >
                SEND
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View
        style={{
          height: "1px",
          width: "100%",
          backgroundColor: "#7B7B7B4D",
          opacity: 0.3,
          marginBottom: "3.5em",
        }}
      />

      <View
        style={{
          paddingHorizontal: "8.5em",
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            style={{
              width: 50,
              height: 50,
              marginRight: "11em",
            }}
            accessibilityLabel="Cuer Logo"
            accessibilityRole="image"
            source={require("./assets/cuer-logo.png")}
          />
          <View>
            <Text
              style={{
                marginBottom: 30,
                fontFamily: "Lexend_400Regular",
                fontSize: "1.7rem",
              }}
            >
              Company
            </Text>
            <Link>About us</Link>
            <Pressable onPress={() => navigation.navigate("contactus")}>
              <Link>Contact us</Link>
            </Pressable>
          </View>
          <View
            style={{
              marginLeft: "6.5em",
            }}
          >
            <Text
              style={{
                marginBottom: 30,
                fontFamily: "Lexend_400Regular",
                fontSize: "1.7rem",
              }}
            >
              Resources
            </Text>
            <Link>FAQs</Link>
            <Link>Help Centre</Link>
            <Link>Privacy policy</Link>
          </View>
          <View
            style={{
              marginLeft: "6.5em",
            }}
          >
            <Text
              style={{
                marginBottom: 30,
                fontFamily: "Lexend_400Regular",
                fontSize: "1.7rem",
              }}
            >
              Company
            </Text>
            <Link>Privacy policy</Link>
            <Link>Terms and Conditions</Link>
          </View>
          <View
            style={{
              marginLeft: "6.5em",
            }}
          >
            <Text
              style={{
                marginBottom: 30,
                fontFamily: "Lexend_400Regular",
                fontSize: "1.7rem",
              }}
            >
              Social
            </Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  marginRight: "1.2em",
                }}
              >
                <Image
                  style={styles.icon}
                  source={require("./assets/facebook.png")}
                />
              </View>
              <View
                style={{
                  marginRight: "1.2em",
                }}
              >
                <Image
                  style={styles.icon}
                  source={require("./assets/instagram.png")}
                />
              </View>
              <View
                style={{
                  marginRight: "1.2em",
                }}
              >
                <Image
                  style={styles.icon}
                  source={require("./assets/twitter.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <Text
          style={{
            fontFamily: "Lexend_400Regular",
            fontSize: "1.2rem",
          }}
        >
          CueR © 2022. All rights reserved.
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: "2.2rem",
    backgroundColor: "#ffffff",
  },
  explainerBody: {
    fontFamily: "Lexend_300Light",
    fontSize: "1.7rem",
  },
  explainerTitle: {
    fontFamily: "Lexend_400Regular",
    fontSize: "2.8rem",
  },
  heading: {
    color: "#101018",
    fontFamily: "Lexend_500Medium",
    fontSize: "5rem",
    marginBottom: 300,
  },
  rowText: {
    color: "#616E88",
    fontFamily: "Lexend_300Light",
    fontSize: "1.3rem",
    marginRight: 10,
  },
  icon: {
    width: "1.7em",
    aspectRatio: 1,
  },
});
