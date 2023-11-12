import React, { useState } from 'react';
import { View, FlatList, Text, TouchableHighlight, Modal, Button } from 'react-native';



const ArtwokDetail = ({isDetailVisible,closeDetail}) => {

    return (
        <Modal visible={isDetailVisible} animationType="slide">
            <View>
                <Text>Test!</Text>
            </View>
            <Button title ="Back" onPress={closeDetail}/>
        </Modal>
    );

};

export default ArtwokDetail;