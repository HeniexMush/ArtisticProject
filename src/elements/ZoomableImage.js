import React from 'react';
import { Modal, Text, StyleSheet, View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const ZoomableImage = ({ imageUrls, visible, onClose, title }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <ImageViewer
        imageUrls={imageUrls}
        enableSwipeDown={true}
        onSwipeDown={onClose}
        saveToLocalByLongPress={false}    
      />
      <View style={styles.overlay} />

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Swipe the image to the bottom to close!
        </Text>
      </View>
      
     
    </Modal>
    
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 2,
    backgroundColor: 'transparent',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  footerText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 80,
    backgroundColor: 'black',
  },
});

export default ZoomableImage;