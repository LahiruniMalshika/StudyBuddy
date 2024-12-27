// Components/BookCard.tsx
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import styles from "../Styles/HomeStyle";

interface BookCardProps {
  title: string;
  author: string;
  cover: string;
  description: string;
  status: string;
  onAdd: () => void;
  onRemove: () => void;
  onPress: () => void;
}

const BookCard: React.FC<BookCardProps> = ({
     title, author, cover, description, status,  onAdd,
    onRemove, onPress}) => {
    const [isAdded, setIsAdded] = useState(false);

  const handleToggle = () => {
    if (isAdded) {
      onRemove();
    } else {
      onAdd();
    }
    setIsAdded(!isAdded);
  };
  return (
    <View style={styles.card} >
      <Image source={{ uri: cover }} style={styles.cover} />
      <Text style={styles.statusTag}>{status}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.description}>{description}</Text>
      
      <TouchableOpacity
        style={[styles.toggleButton, isAdded && styles.toggleButtonAdded]}
        onPress={handleToggle}
      >
        <Text style={styles.toggleButtonText}>{isAdded ? "-" : "+"}</Text>
      </TouchableOpacity>
    </View>
    
  );
};



export default BookCard;
