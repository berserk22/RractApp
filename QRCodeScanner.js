// QRCodeScanner.js

import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';

const QRCodeScanner = () => {
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({type, data}) => {
    setScanned(true);
    alert(`QR-Code gescannt!\nTyp: ${type}\nDaten: ${data}`);
  };

  const handleScanAgain = () => {
    setScanned(false);
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        onBarCodeRead={scanned ? undefined : handleBarCodeScanned}>
        {scanned && (
          <TouchableOpacity
            style={styles.scanAgainButton}
            onPress={handleScanAgain}>
            <Text style={styles.scanAgainText}>Erneut scannen</Text>
          </TouchableOpacity>
        )}
      </RNCamera>
      {scanned && (
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>QR-Code gescannt!</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  overlayText: {
    fontSize: 24,
    color: 'white',
  },
  scanAgainButton: {
    padding: 15,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  scanAgainText: {
    fontSize: 20,
    color: 'black',
  },
});

export default QRCodeScanner;
