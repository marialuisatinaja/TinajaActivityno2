import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

const FoodAppScreen = () => {
  const data = [
    {
      id: '1',
      name: 'Pizza',
      image: require('./assets/pizza.jpeg'),
      description: 'Delicious pepperoni pizza',
      price: '$12.99',
    },
    {
      id: '2',
      name: 'Burger',
      image: require('./assets/burger.jpeg'),
      description: 'Classic cheeseburger with fries',
      price: '$8.99',
    },
    {
      id: '2',
      name: 'Sushi',
      image: require('./assets/sushi.jpeg'),
      description: 'Assorted sushi rolls',
      price: '$18.54',
    },
    {
      id: 'MilkShake',
      name: '',
      image: require('./assets/milkshake.jpeg'),
      description: 'Premium Flavors',
      price: '$10.34',
    },
    {
      id: '3',
      name: 'Ramen',
      image: require('./assets/ramen.jpeg'),
      description: 'Japanese Ramen Noodles',
      price: '$15.99',
    },
    // Add more food items here
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Food App</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 16,
  },
  header: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dddddd',
    padding: 16,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 16,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 16,
    color: '#888888',
  },
  itemPrice: {
    fontSize: 18,
    color: '#27ae60',
    marginTop: 8,
  },
});

export default FoodAppScreen;

