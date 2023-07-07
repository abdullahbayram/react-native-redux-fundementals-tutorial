import React, {} from 'react';
import {
    View, TouchableOpacity, Text
} from 'react-native';
import Modal from 'react-native-modal';
import { Fonts } from '../../themes';
import styles from './FilterModalStyle';
import { height } from "../../constants";

const FilterModal = (props) => {
    const {
        children,
        filterHeight = height / 2,
        isVisible,
        onBackdropPress,
        backdropColor,
        onDonePress,
        maxHeight = height / 2,
    } = props;
    return (
        <Modal
            propagateSwipe
            swipeDirection={['down']}
            onBackButtonPress={onBackdropPress}
            onSwipeComplete={onBackdropPress}
            style={styles.modal}
            hasBackdrop
            animationIn="slideInUp"
            animationInTiming={1000}
            animationOutTiming={200}
            onBackdropPress={onBackdropPress}
            backdropColor={backdropColor || 'black'}
            backdropOpacity={0.7}
            isVisible={isVisible}
        >
            <View
                style={[styles.container,
                    {
                        height: filterHeight * (height / 812),
                        maxHeight,
                    }]}
            >
                    <View testID="FilterModal.divider" style={styles.topContainer}>
                        <View style={styles.divider} />
                    </View>
                <View style={styles.childrenContainer}>
                    {children}
                </View>
                <TouchableOpacity
                    style={styles.done}
                    onPress={onDonePress}
                >
                    <Text
                        style={Fonts.filterDone}
                    >
                        Done
                    </Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default FilterModal;
