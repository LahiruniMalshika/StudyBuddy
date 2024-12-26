// Components/BookCard.tsx
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface BookCardProps {
  title: string;
  author: string;
  cover: string;
  description: string;
  status: string;
  onPress: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, cover, description, status, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: cover }} style={styles.cover} />
      <Text style={styles.statusTag}>{status}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  cover: {
    height: 150,
    width: "100%",
    borderRadius: 8,
    marginBottom: 10,
  },
  statusTag: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#4CAF50",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  author: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: "#777",
  },
});

export default BookCard;
