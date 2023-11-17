import React from 'react';
import { Modal, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import HTML from 'react-native-render-html';

const ArtistModal = ({ artistData, artistVisible, setArtistVisible }) => {
    
    const renderDescription = () => {
        if (artistData.description != null) {
            return (
                <ScrollView showsVerticalScrollIndicator={false} style={styles.description}>
                    <HTML source={{ html: artistData.description }} contentWidth={300} 
                    tagsStyles={{ p: { textAlign: 'center' }}} />
                </ScrollView>
            )
        } else {
            return (
                <Text style={styles.notfound}>No description available</Text>
              );
        }
    }

    const renderDate = () => {
        if (artistData.birth_date == null && artistData.death_date == null) {
            return (
                <Text style={styles.birthDeath}>Unknown life span</Text>
            )
        } else if (artistData.birth_date == null) {
            return (
                <Text style={styles.birthDeath}>Birth date unknown, died at {artistData.death_date}</Text>
            )
        } else if (artistData.death_date == null) {
            return (
                <Text style={styles.birthDeath}>Born: {artistData.birth_date}</Text>
            )
        } else {
            return (
                <Text style={styles.birthDeath}>
                    Born: {artistData.birth_date} - Died: {artistData.death_date}
                </Text>
            )
        }
    }


  return (
    <Modal
      transparent={true}
      visible={artistVisible}
      animationType='slide'
      onRequestClose={() => setArtistVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{artistData.title}</Text>
          {renderDate()}
          {renderDescription()}
          <TouchableOpacity onPress={() => setArtistVisible(false)} style={styles.closeButton}>
            <Text style={styles.closeText}>Return</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingBottom: 10,
    maxHeight: 300,
    minHeight:20,
    
  },
  birthDeath: {
    fontStyle: 'italic',
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    color: 'black',
    backgroundColor:'white',
    fontSize: 19,
    alignSelf:'center',
    width:'100%',
    justifyContent: 'center',
    textAlign: 'center',
    height: 60,
    width: 120,
  },
  closeText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  notfound: {
    width: '100%',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
};

export default ArtistModal;