// Screens/HomeScreen.tsx
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Alert } from "react-native";
import BookCard from "../Components/BookCard";

interface Book {
  key: string;
  title: string;
  author: string;
  coverId: string;
  description: string; // Added description field
}

export default function HomeScreen() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        `https://openlibrary.org/subjects/science_fiction.json?limit=20`
      );
      const data = await response.json();

      const fetchedBooks = data.works.map((book: any) => ({
        key: book.key,
        title: book.title,
        author: book.authors?.[0]?.name || "Unknown Author",
        coverId: book.cover_id,
        description: book.description?.value || "No description available", // Handling description
      }));

      setBooks(fetchedBooks);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching books:", error);
      setLoading(false);
      Alert.alert("Error", "Failed to fetch books.");
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6200EE" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Popular Science Fiction Books</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <BookCard
            title={item.title}
            author={item.author}
            cover={`https://covers.openlibrary.org/b/id/${item.coverId}-L.jpg`}
            description={item.description}
            status="Available" // Example status
            onPress={() => Alert.alert("Book Selected", `You selected ${item.title}`)}
          />
        )}
        numColumns={2} // Two cards per row
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F8F9FD",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  list: {
    paddingBottom: 20,
  },
});
