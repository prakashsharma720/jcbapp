// DrawerMenu.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DrawerMenu = ({ label, icon, onPress, isExpanded }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.menuItemContainer}>
        <Text style={styles.menuItemText}>{label}</Text>
        <Text style={styles.icon}>{isExpanded ? '-' : '+'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
  },
});

export default DrawerMenu;
