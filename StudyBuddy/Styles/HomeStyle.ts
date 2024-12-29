import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5", 
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333333", 
  },
  heading1: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#007bff", 
    paddingLeft: 16,
  },
  exerciseCountContainer: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#007bff", 
  },
  exerciseCountText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffffff", 
    width: "100%",
    padding: 10,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#ffffff", 
    borderRadius: 8,
    padding: 16,
    margin: 8,
    width: "45%",
    alignItems: "center",
    shadowColor: "#000000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    position: "relative",
  },
  
  cover: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
    color: "#333333", 
  },
  details: {
    fontSize: 14,
    color: "#6c757d", 
  },
  toggleButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#007bff", 
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  toggleButtonAdded: {
    backgroundColor: "#dc3545", 
  },
  toggleButtonText: {
    color: "#ffffff", 
    fontSize: 18,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#007bff", 
    paddingLeft: 16,
  },
  list: {

    paddingBottom: 20,

  },
  loadingContainer: {

    flex: 1,

    justifyContent: "center",

    alignItems: "center",

  },
  statusTag:{

  },
  title:{

  },
  author:{},
  description:{},

});

export default styles;