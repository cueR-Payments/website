import "@expo/match-media";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageStyle,
  Pressable,
  StyleSheet,
  Text,
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

const pen = require("./assets/pen.png");
const wallet = require("./assets/wallet.png");
const qrCode = require("./assets/qr-code.png");
const notification = require("./assets/notification.png");
const moneyBox = require("./assets/money-box.png");

const bell = require("./assets/bell.png");
const profile = require("./assets/profile.png");
const security = require("./assets/security.png");

const vector1 = require("./assets/vector-bg1.png");
const vector2 = require("./assets/vector-bg2.png");
const vector3 = require("./assets/vector-bg3.png");

const vectorStyle: ImageStyle = {
  zIndex: -10,
  position: "absolute",
  width: "22em",
  height: "20em",
  top: -50,
  left: -100,
};

const ExplainerBlock = ({
  image,
  title,
  topText,
  vector,
  styleVector,
}: {
  image: number;
  title: string;
  topText: string;
  vector: number;
  styleVector?: ImageStyle;
}) => (
  <View>
    <Image style={[vectorStyle, styleVector]} source={vector} />
    <View
      style={{
        backgroundColor: "#ffffff",
        alignItems: "center",
        paddingVertical: "3em",
        zIndex: 1,
        width: "22em",
        height: "20em",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          height: 4,
          width: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      }}
    >
      <Text
        style={{
          position: "absolute",
          top: -20,
          left: -20,
          fontFamily: "Lexend_400Regular",
          fontSize: 40,
        }}
      >
        {topText}
      </Text>
      <Text
        style={{
          fontFamily: "Lexend_700Bold",
          fontSize: 18,
          marginBottom: "1.7em",
        }}
      >
        {title}
      </Text>
      <Image
        style={{
          width: 120,
          aspectRatio: 1,
        }}
        source={image}
      />
    </View>
  </View>
);

const InfoBlock = ({
  image,
  title,
  subtitle,
}: {
  image: number;
  title: string;
  subtitle: string;
}) => (
  <View>
    <View
      style={{
        alignItems: "center",
        paddingVertical: "3em",
        zIndex: 1,
        width: "25em",
        height: "25em",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          height: 4,
          width: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      }}
    >
      <Image
        style={{
          width: 60,
          aspectRatio: 1,
        }}
        source={image}
      />
      <View
        style={{
          marginTop: "3em",
          alignItems: "center",
          marginHorizontal: "1.7em",
        }}
      >
        <Text
          style={{
            fontFamily: "Lexend_400Regular",
            fontSize: 24,
            marginBottom: "1.7em",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontFamily: "Lexend_400Regular",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          {subtitle}
        </Text>
      </View>
    </View>
  </View>
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
        source={require("./assets/bg1.png")}
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
            marginTop: 100,
            marginBottom: 24,
          }}
        >
          <Text style={styles.rowText}>Swift</Text>
          <Text style={styles.rowText}>Simple.</Text>
          <Text style={styles.rowText}>Secure</Text>
        </View>
        <Text style={styles.heading}>
          Bridging the gap between merchants & customers via contactless
          payment.
        </Text>
        <View
          style={{
            alignSelf: "center",
            alignItems: "center",
            marginBottom: 100,
          }}
        >
          <Text style={styles.explainerTitle}>How it works</Text>
          <Text style={styles.explainerBody}>
            It is summarised in 5 simple and convenient steps
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ExplainerBlock
            vector={vector1}
            topText="01"
            image={pen}
            title="Sign up & create wallet"
          />
          <ExplainerBlock
            styleVector={{
              top: 50,
            }}
            vector={vector2}
            topText="02"
            image={wallet}
            title="Load wallet"
          />
          <ExplainerBlock
            styleVector={{
              left: 110,
            }}
            vector={vector3}
            topText="03"
            image={qrCode}
            title="Pay with QR"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: "5em",
          }}
        >
          <View
            style={{
              marginRight: "4.5em",
            }}
          >
            <ExplainerBlock
              vector={vector1}
              topText="04"
              image={notification}
              title="Instant notification"
            />
          </View>
          <ExplainerBlock
            styleVector={{
              left: 110,
            }}
            vector={vector3}
            topText="05"
            image={moneyBox}
            title="Transfer to other wallets"
          />
        </View>

        <View
          style={{
            alignSelf: "center",
            alignItems: "center",
            marginBottom: "7em",
          }}
        >
          <Text style={styles.explainerTitle}>Did you know</Text>
          <Text style={styles.explainerBody}>
            CueR is swift, secure, simple to use and is available for everyone’s
            use?
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <InfoBlock
            subtitle="CueR is a reliable payment platform that provides instant notifications, prompt reversal of failed transactions and rapid settlements."
            image={bell}
            title="Very reliable"
          />
          <InfoBlock
            subtitle="Create your account in 3 easy steps by providing and verifying your phone number, inputing your contact details and creating your login details."
            image={profile}
            title="Easy account creation"
          />
          <InfoBlock
            subtitle="Our platform is secure using the best industry security standards (as defined by OWASP) to fully protect your details and prevent unwanted access to your history."
            image={security}
            title="Always secure"
          />
        </View>
        {/* <View
          style={{
            alignSelf: "center",
            alignItems: "center",
            marginTop: "14em",
          }}
        >
          <Text style={styles.explainerTitle}>How to use CueR</Text>
        </View> */}
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
