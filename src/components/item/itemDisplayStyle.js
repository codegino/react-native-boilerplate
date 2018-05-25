import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    justifyContent: 'center',
    fontSize: 16,
    marginLeft: 5,
  },
  menu: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  menuButton: {
    marginHorizontal: 2,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    padding: 5,
    borderWidth: 1,
  },
  menuButtonText: {
    fontSize: 25,
  },
});

export default styles;
