import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F9FD",
    width: "100%",
    padding: 16,
   
  },
  heading: {
    fontSize: 24,

    fontWeight: "bold",

    marginVertical: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    paddingTop: 0,
  },
  backgroundImage: {
    width: "100%",
    height: "70%",
    resizeMode: "cover",
  },
  formContainer: {
    flex: 1.2,
    alignItems: "center",
    marginTop: -80, // Adjust to overlap form slightly over image
    width: "90%",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#333",
    marginBottom: 25,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#E5E5E5",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: "#FDFDFD",
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  button: {
    width: "100%",
    backgroundColor: "#6200EE",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 6,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  link: {
    marginTop: 15,
    color: "#6200EE",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});

export default styles;
