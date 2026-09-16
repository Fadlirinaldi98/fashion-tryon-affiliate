import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState('front');
  const cameraRef = useRef(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Kami memerlukan akses ke kamera Anda</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={requestPermission}
        >
          <Text style={styles.buttonText}>Berikan Izin</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const toggleFacing = () => {
    setFacing(current => (current === 'front' ? 'back' : 'front'));
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        Alert.alert('Foto Tersimpan', 'Foto virtual try-on Anda sudah tersimpan');
      } catch (error) {
        Alert.alert('Error', 'Gagal mengambil foto');
      }
    }
  };

  return (
    <View style={styles.container}>
      <CameraView 
        style={styles.camera} 
        facing={facing}
        ref={cameraRef}
      >
        <View style={styles.topBar}>
          <Text style={styles.instruction}>Posisikan tubuh Anda di tengah frame</Text>
        </View>

        <View style={styles.bottomBar}>
          <TouchableOpacity 
            style={styles.flipButton}
            onPress={toggleFacing}
          >
            <Text style={styles.flipButtonText}>🔄</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.captureButton}
            onPress={takePicture}
          >
            <View style={styles.captureInner} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.emptyButton} />
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
    color: '#fff',
    fontSize: 16,
  },
  topBar: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  instruction: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  bottomBar: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  flipButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flipButtonText: {
    fontSize: 24,
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 4,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureInner: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FF6B6B',
  },
  emptyButton: {
    width: 50,
    height: 50,
  },
  button: {
    padding: 15,
    backgroundColor: '#FF6B6B',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
