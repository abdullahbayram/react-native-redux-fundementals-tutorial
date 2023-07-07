import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Header from './src/features/header/Header'
import TopBar from "./src/features/topBar/TopBar";
import FilterModal from "./src/features/filterModal/FilterModal";

// import './src/api'

import store from './src/store'

store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
// log: '1'
// log: '2'
// log: '3'

export default function App() {
    const [filterVisible, setFilterVisible] = useState(true)

  return (
    <SafeAreaView style={styles.container}>
      <TopBar/>
      <Header/>
      <StatusBar style="auto" />
      <FilterModal
          isVisible={filterVisible}
          onDonePress={()=>setFilterVisible(false)}
          onBackDropPress={()=>setFilterVisible(false)}
      >

      </FilterModal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
