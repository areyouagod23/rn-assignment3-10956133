import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Image, FlatList, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

const initialCategories = [
  { id: '1', name: 'Exercise', tasks: 1, image: require('./assets/m.jpg') },
  { id: '2', name: 'Study', tasks: 2, image: require('./assets/ei.jpg') },
  { id: '3', name: 'Code', tasks: 3, image: require('./assets/code.jpg') },
  { id: '5', name: 'Read', tasks: 4, image: require('./assets/Read.jpg') },
  { id: '7', name: 'Relax', tasks: 5, image: require('./assets/reax.jpg') },
  { id: '7', name: 'Relax', tasks: 6, image: require('./assets/eat.jpg') },
  { id: '7', name: 'Relax', tasks: 7, image: require('./assets/shop.jpg') },
  { id: '7', name: 'Relax', tasks: 8, image: require('./assets/medi.jpg') },
];

const initialOngoingTasks = [
  { id: '1', name: 'Mobile App Development' },
  { id: '2', name: 'Web Development' },
  { id: '3', name: 'Push Ups' },
  { id: '4', name: 'Machine Learning' },
  { id: '6', name: 'Information Modeling' },
  { id: '7', name: 'Software Engineering' },
  { id: '8', name: 'Data Structures' },
  { id: '9', name: 'Office Productivity Tools' },
  { id: '10', name: 'Introduction To Computer Science' },
  { id: '11', name: 'Reloading' },
  { id: '12', name: 'Artificial Intelligence' },
  { id: '13', name: 'Mathematics' },
  { id: '14', name: 'Critical Thinking' },
  { id: '15', name: 'Academic Writing' },
];

const CategoryItem = ({ category }) => (
  <View style={styles.categoryItem}>
    <Image source={category.image} style={styles.categoryImage} />
    <Text style={styles.categoryText}>{category.name}</Text>
    <Text style={styles.categoryTasks}>{category.tasks} Tasks</Text>
  </View>
);

const TaskItem = ({ task }) => (
  <View style={styles.taskItem}>
    <Text style={styles.taskText}>{task.name}</Text>
  </View>
);

const App = () => {
  const [ongoingTasks, setOngoingTasks] = useState(initialOngoingTasks);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      const newTaskItem = { id: (ongoingTasks.length + 1).toString(), name: newTask };
      setOngoingTasks([...ongoingTasks, newTaskItem]);
      setNewTask('');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Text style={styles.taskCount}>{ongoingTasks.length} tasks today</Text>
          <Image source={require('./assets/dp.jpg')} style={styles.profileImage} />
        </View>
        <View style={styles.searchSection}>
          <View style={styles.searchInputContainer}>
            <Image source={require('./assets/search-icon.png')} style={styles.searchIcon} />
            <TextInput style={styles.searchInput} placeholder="Search" />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Image source={require('./assets/cc.png')} style={styles.filterImage} />
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
          {initialCategories.map(category => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </ScrollView>
        <Text style={styles.sectionTitle}>Ongoing Task</Text>
        <FlatList
          data={ongoingTasks}
          renderItem={({ item }) => <TaskItem task={item} />}
          keyExtractor={item => item.id}
          style={styles.taskList}
        />
        <View style={styles.addTaskContainer}>
          <TextInput
            style={styles.newTaskInput}
            placeholder="New task"
            value={newTask}
            onChangeText={setNewTask}
          />
          <TouchableOpacity style={styles.addButton} onPress={addTask}>
            <Text style={styles.addButtonText}>Add Task</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F4F0',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    top: 20,
    width: 170,
    height: 52,
  },
  taskCount: {
    fontSize: 16,
    color: '#666',
    top: 50,
    width: 170,
    height: 52,
    right: 170,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    top: 20,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    top: 20,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
  },
  filterButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#FA6D42',
    borderRadius: 8,
  },
  filterImage: {
    width: 26,
    height: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    top: 5,
  },
  categoriesContainer: {
    flexDirection: 'row',
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
    top: 3,
  },
  categoryImage: {
    width: 198,
    height: 200,
    left: 8,
    borderRadius: 30,
  },
  categoryText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    bottom: 192,
    right: 50,
  },
  categoryTasks: {
    fontSize: 14,
    color: '#666',
    bottom: 192,
    right: 50,
  },
  taskList: {
    marginTop: 10,
    width: 363,
    top: 2,
  },
  taskItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    width: 365,
    height: 128,
  },
  taskText: {
    fontSize: 16,
    fontWeight: 'bold',
    top: 30,
    width: 200,
    height: 19,
  },
  addTaskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40, // Added margin bottom for visibility
  },
  newTaskInput: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  addButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#FA6D42',
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
