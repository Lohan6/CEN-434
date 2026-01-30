import React from 'react';
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';

// Import your existing components
// Ensure these files are in the same directory (app/tabs/)
import Calculator from './Calculator';
import SimpleTextEditor from './SimpleTextEditor';
import WeightConverter from './WeightConverter';
import PersonalBudgetApp from './budget'; 
import NewsAggregator from './news';     

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.mainHeader}>My Super App</Text>

        {/* 1. Calculator Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Quick Calculator</Text>
          <View style={styles.cardContent}>
            <Calculator />
          </View>
        </View>

        {/* 2. Weight Converter Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Converter</Text>
          <View style={styles.cardContent}>
            <WeightConverter />
          </View>
        </View>

        {/* 3. Text Editor Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Notes</Text>
          <View style={styles.cardContent}>
            <SimpleTextEditor />
          </View>
        </View>

        {/* 4. Budget App */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Budget Tracker</Text>
          {/* We give this a fixed height because PersonalBudgetApp has its own scrolling list */}
          <View style={[styles.cardContent, styles.fixedHeight]}>
            <PersonalBudgetApp />
          </View>
        </View>

        {/* 5. News App */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Daily News</Text>
          <View style={[styles.cardContent, styles.fixedHeight]}>
            <NewsAggregator />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 50,
  },
  mainHeader: {
    fontSize: 32,
    fontWeight: '800',
    color: '#333',
    marginBottom: 20,
    marginTop: 10,
    textAlign: 'center',
  },
  sectionContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#444',
    marginBottom: 10,
    marginLeft: 4,
  },
  cardContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },

  fixedHeight: {
    height: 600, 
  },
});
