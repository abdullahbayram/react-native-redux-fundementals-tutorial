import { StyleSheet } from 'react-native';
import { Colors } from '../../themes';
import { width, height } from "../../constants";


export default StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
    zIndex: 2,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 15,
    maxWidth: 450,
    width: width,
  },
  topContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  childrenContainer: {
    flex: 1,
    alignItems: 'center',
  },
  done: {
    position: 'absolute',
    right: 25,
    top: 10,
  },
  divider: {
    height: 5,
    width: width * 0.3,
    maxWidth: 135,
    borderRadius: 2,
    backgroundColor: Colors.dedeGray,
    flex: 1,
  },
});
