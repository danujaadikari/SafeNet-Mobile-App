import React from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      {/* Personal Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Personal Information</Text>
        <TextInput style={styles.input} placeholder="Your Full Name" />
        <TextInput style={styles.input} placeholder="Date of Birth" />
        
        <View style={styles.genderContainer}>
          <Text style={styles.label}>Gender:</Text>
          <TouchableOpacity style={styles.checkbox}><Text>Female</Text></TouchableOpacity>
          <TouchableOpacity style={styles.checkbox}><Text>Male</Text></TouchableOpacity>
        </View>

        <TextInput style={styles.input} placeholder="National ID" />
      </View>

      {/* Contact Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Contact Information</Text>
        <TextInput style={styles.input} placeholder="Phone Number" />
        <TextInput style={styles.input} placeholder="Email Address" />
        <TextInput style={styles.input} placeholder="Home Address" />
      </View>

      {/* Emergency Contact */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Emergency Contact</Text>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Relationship" />
        <TextInput style={styles.input} placeholder="Phone Number" />
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#d0d7e2" },
  header: { backgroundColor: "#5ec2a5", padding: 30, alignItems: "center", borderBottomLeftRadius: 50 },
  headerText: { fontSize: 28, fontWeight: "bold", color: "#fff" },
  section: { padding: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  input: { backgroundColor: "#fff", padding: 10, borderRadius: 10, marginVertical: 5 },
  
  genderContainer: { 
    flexDirection: "row", 
    alignItems: "center",  // Fixed alignment issue
    marginTop: 10 
  },
  label: { marginRight: 10, fontSize: 16 },
  checkbox: { 
    padding: 10, 
    borderWidth: 1, 
    borderColor: "#5ec2a5", // Added border color
    borderRadius: 5, 
    marginRight: 10 
  },
  
  submitButton: { 
    backgroundColor: "#5ec2a5", 
    padding: 15, 
    borderRadius: 10, 
    alignItems: "center", 
    marginTop: 20,
    marginHorizontal: 20
  },
  submitButtonText: { 
    color: "white", 
    fontSize: 18, 
    fontWeight: "bold" 
  }
});
