import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator, Alert } from "react-native";
import BookCard from "../Components/BookCard";
import { RootStackParamList } from "../App";
import { StackScreenProps } from "@react-navigation/stack";
import styles from "../Styles/HomeStyle";
import { useCount } from "../ContextAPI/CountProvider";

type Props = StackScreenProps<RootStackParamList, "Home">;

interface Book {
  key: string;
  title: string;
  author: string;
  coverId: string;
  description: string;
  status: string;
}

export default function HomeScreen({ navigation, route }: Props) {
  const username = route.params?.username || "Guest";
  const [loading, setLoading] = useState(true);
  const {
    bookCount,
    setBookCount,
    selectedBooks,
    setSelectedBooks,
    fetchBooks,
    books,
  } = useCount();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setBookCount(0); // Reset book count to zero
      setSelectedBooks([]); // Clear selected books
      await fetchBooks("science_fiction");
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleAddBooks = (book: Book) => {
    setSelectedBooks([...selectedBooks, book]);
    setBookCount(bookCount + 1);
    Alert.alert(
      "Success",
      `Added ${book.title}`,
      [{ text: "OK", style: "default" }],
      { cancelable: true }
    );
  };

  const handleRemoveBooks = (book: Book) => {
    setSelectedBooks(selectedBooks.filter((b) => b.key !== book.key));
    setBookCount(bookCount - 1);
    Alert.alert(
      "Removed",
      `Removed ${book.title}`,
      [{ text: "OK", style: "destructive" }],
      { cancelable: true }
    );
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#6200EE" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.username}>Welcome, {username}!</Text>
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
            status={item.status}
            onPress={() =>
              Alert.alert("Book Selected", `You selected ${item.title}`)
            }
            onAdd={() => handleAddBooks(item)}
            onRemove={() => handleRemoveBooks(item)}
          />
        )}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
      <View style={styles.exerciseCountContainer}>
        <Text style={styles.exerciseCountText}>Books Added: {bookCount}</Text>
      </View>
    </View>
  );
}
