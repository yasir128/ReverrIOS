/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class BottomPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  onOpenModal = () => {
    this.setState({show: true});
  };

  onCloseModal = () => {
    this.setState({show: false});
  };

  renderOutsideTouchable(onTouch) {
    const view = <View style={{flex: 1, width: '100%'}} />;
    if (!onTouch) {
      return view;
    }

    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{flex: 1, width: '100%'}}>
        {view}
      </TouchableWithoutFeedback>
    );
  }

  render() {
    let {show} = this.state;
    let {onTouchOutside, children} = this.props;

    return (
      <Modal
        animationIn={'slideInUp'}
        transparent={true}
        isVisible={show}
        hasBackdrop={true}
        backdropColor="black"
        backdropOpacity={0.5}
        deviceWidth={deviceWidth}
        style={{margin: 0}}
        customBackdrop={
          <View
            style={{
              position: 'absolute',
              backgroundColor: 'red',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
          />
        }>
        {this.renderOutsideTouchable(onTouchOutside)}
        <View
          style={{
            backgroundColor: 'rgb(255,255,255)',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            height: deviceHeight * (this.props.height / 100),
            overflow: 'hidden',
          }}>
          <View
            style={{
              position: 'absolute',
              right: 30,
              top: 30,
              zIndex: 1,
            }}>
            <TouchableWithoutFeedback onPress={this.onCloseModal}>
              <Text>Close</Text>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.modalBody}>{children}</View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalBody: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
