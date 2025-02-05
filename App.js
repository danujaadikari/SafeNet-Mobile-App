import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './screens/ProfileScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('auth');
  const [isSignUp, setIsSignUp] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    age: '',
    userType: 'children'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSignUp = () => {
    if (!formData.name || !formData.email || !formData.password || !formData.phone || !formData.age) {
      alert('Please fill in all fields');
      return;
    }

    if (registeredUsers.find(user => user.email === formData.email)) {
      alert('Email already registered');
      return;
    }

    setRegisteredUsers([...registeredUsers, formData]);
    alert('Registration successful! Please sign in.');
    setIsSignUp(false);
    setFormData({
      name: '',
      email: '',
      password: '',
      phone: '',
      age: '',
      userType: 'children'
    });
  };

  const handleSignIn = () => {
    const user = registeredUsers.find(
      user => user.email === formData.email && user.password === formData.password
    );

    if (user) {
      setCurrentUser(user);
      setCurrentScreen('dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentScreen('auth');
  };

  const renderBackButton = () => (
    <TouchableOpacity style={styles.backButton} onPress={() => setCurrentScreen('dashboard')}>
      <Icon name="arrow-left" size={24} color="#666" />
    </TouchableOpacity>
  );

  const renderDashboard = () => (
    <SafeAreaView style={styles.container}>
      {renderBackButton()}
      <View style={styles.dashboardContent}>
        <View style={styles.headerSection}>
          <View>
            <Text style={styles.welcomeText}>Welcome {currentUser?.name}</Text>
            <Text style={styles.userTypeText}>({currentUser?.userType})</Text>
          </View>
          <Text style={styles.accountText}>My Account</Text>
        </View>

        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={() => setCurrentScreen('profile')}>
            <Icon name="account-outline" size={24} color="#666" />
            <Text style={styles.menuText}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Icon name="web" size={24} color="#666" />
            <Text style={styles.menuText}>Websites</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Icon name="keyboard-outline" size={24} color="#666" />
            <Text style={styles.menuText}>Keylogging</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Icon name="bell-outline" size={24} color="#666" />
            <Text style={styles.menuText}>Emergency Alert</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Icon name="calendar-month" size={24} color="#666" />
            <Text style={styles.menuText}>Monthly Reports</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <Icon name="logout" size={24} color="#666" />
            <Text style={styles.menuText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );

  if (currentScreen === 'dashboard') {
    return renderDashboard();
  }

  if (currentScreen === 'profile') {
    return (
      <SafeAreaView style={styles.container}>
        {renderBackButton()}
        <ProfileScreen />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Heey I'm SafeNet</Text>

        <View style={styles.card}>
          <Text style={styles.title}>{isSignUp ? 'Sign Up' : 'Sign In'}</Text>
          
          {isSignUp && (
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={formData.name}
              onChangeText={(value) => handleInputChange('name', value)}
            />
          )}

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={formData.password}
            onChangeText={(value) => handleInputChange('password', value)}
            secureTextEntry
          />

          {isSignUp && (
            <>
              <TextInput
                style={styles.input}
                placeholder="Phone"
                value={formData.phone}
                onChangeText={(value) => handleInputChange('phone', value)}
                keyboardType="phone-pad"
              />

              <TextInput
                style={styles.input}
                placeholder="Age"
                value={formData.age}
                onChangeText={(value) => handleInputChange('age', value)}
                keyboardType="numeric"
              />
            </>
          )}

          {!isSignUp && (
            <View style={styles.userTypeContainer}>
              <TouchableOpacity
                style={[
                  styles.userTypeButton,
                  formData.userType === 'children' && styles.userTypeButtonActive
                ]}
                onPress={() => handleInputChange('userType', 'children')}
              >
                <Text style={[
                  styles.userTypeText,
                  formData.userType === 'children' && styles.userTypeTextActive
                ]}>Children</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[
                  styles.userTypeButton,
                  formData.userType === 'parents' && styles.userTypeButtonActive
                ]}
                onPress={() => handleInputChange('userType', 'parents')}
              >
                <Text style={[
                  styles.userTypeText,
                  formData.userType === 'parents' && styles.userTypeTextActive
                ]}>Parents</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity 
            style={styles.submitButton} 
            onPress={isSignUp ? handleSignUp : handleSignIn}
          >
            <Text style={styles.submitButtonText}>{isSignUp ? 'Sign Up' : 'Sign In'}</Text>
          </TouchableOpacity>

          {!isSignUp && (
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Your Password</Text>
            </TouchableOpacity>
          )}

          {isSignUp && (
            <Text style={styles.terms}>
              By clicking this button, you agree with our{' '}
              <Text style={styles.termsLink}>Terms and Conditions</Text>
            </Text>
          )}

          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Icon name="google" size={20} color="#666" />
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.socialButton}>
              <Icon name="facebook" size={20} color="#666" />
              <Text style={styles.socialButtonText}>Facebook</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => {
            setIsSignUp(!isSignUp);
            setFormData({
              name: '',
              email: '',
              password: '',
              phone: '',
              age: '',
              userType: 'children'
            });
          }}>
            <Text style={styles.switchText}>
              {isSignUp ? 'Already have an account? ' : "I Don't have an account? "}
              <Text style={styles.switchLink}>{isSignUp ? 'Sign In' : 'Sign Up'}</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7DCCB3',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  dashboardContent: {
    flex: 1,
    padding: 20,
  },
  headerSection: {
    backgroundColor: '#7DCCB3',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 28,
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
  userTypeText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
  },
  accountText: {
    fontSize: 20,
    color: 'white',
    marginTop: 15,
  },
  menuContainer: {
    marginTop: 20,
    backgroundColor: '#F8F9FA',
    borderRadius: 20,
    padding: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    marginVertical: 5,
  },
  menuText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#666',
  },
  header: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    marginVertical: 30,
    fontWeight: '600',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginBottom: 15,
    fontSize: 16,
  },
  userTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 20,
  },
  userTypeButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#7DCCB3',
  },
  userTypeButtonActive: {
    backgroundColor: '#7DCCB3',
  },
  userTypeText: {
    color: '#7DCCB3',
    fontSize: 16,
  },
  userTypeTextActive: {
    color: 'white',
  },
  submitButton: {
    backgroundColor: '#7DCCB3',
    width: '100%',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  forgotPassword: {
    color: '#7DCCB3',
    fontSize: 16,
    marginVertical: 15,
  },
  terms: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
    marginVertical: 15,
  },
  termsLink: {
    color: '#7DCCB3',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
    width: '45%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  socialButtonText: {
    fontSize: 16,
    color: '#666',
    marginLeft: 10,
  },
  switchText: {
    color: '#666',
    fontSize: 16,
    marginTop: 20,
  },
  switchLink: {
    color: '#7DCCB3',
    fontWeight: '600',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 1,
  },
});

export default function() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}