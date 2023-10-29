import {
  View,
  SafeAreaView,
  StatusBar,
  Pressable,
  Touchable,
  Image,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Images from '@Theme/Images';
import Text from '@Atom/Text';
import {
  AddIcon,
  ArrowIcon,
  CameraIcon,
  EllipsisIcon,
  PhoneIcon,
  SearchIcon,
} from '@Assets/Svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import VideoIcon from '@Assets/Svg/VideoSvg';

const Header = ({backable, homepage, name, detail, data, color, info}) => {
  const navigate = useNavigation();

  if (homepage) {
    return (
      <SafeAreaView>
        <View style={styles.containerHomepage}>
          <Text variant="bold" size={20} color="#FFF">
            WhatsApp
          </Text>

          <View style={styles.wrapperIcon}>
            <CameraIcon color="#FFF" />
            <SearchIcon />
            <EllipsisIcon />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  if (detail) {
    return (
      <SafeAreaView>
        <View style={styles.containerDetail}>
          <View style={styles.wrapperDetail}>
            {backable && (
              <Pressable
                style={styles.backButton}
                onPress={() => navigate.goBack()}>
                <ArrowIcon color="#000000" />
                {/* <Icon size={24} name="arrow-back" color="#000"></Icon> */}
              </Pressable>
            )}

            <View style={styles.details}>
              <Image source={data?.photo} style={styles.images} />
              <Text>{data.phoneNumber}</Text>
            </View>

            <EllipsisIcon color={color} />
          </View>

          <View style={styles.iconsWrapper}>
            <View style={styles.icons}>
              <PhoneIcon />
              <Text size={14} variant="medium" color="#0e806a">
                Audio
              </Text>
            </View>
            <View style={styles.icons}>
              <VideoIcon />
              <Text size={14} variant="medium" color="#0e806a">
                Video
              </Text>
            </View>
            <View style={styles.icons}>
              <AddIcon add />
              <Text size={14} variant="medium" color="#0e806a">
                Save
              </Text>
            </View>
            <View style={styles.icons}>
              <SearchIcon detail />
              <Text size={14} variant="medium" color="#0e806a">
                Search
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {backable && (
          <Pressable
            style={styles.backButton}
            onPress={() => navigate.goBack()}>
            <ArrowIcon color={color} />
            {/* <Icon size={24} name="arrow-back" color="#000"></Icon> */}
          </Pressable>
        )}

        <TouchableOpacity
          onPress={() =>
            navigate.navigate('detail-chat-screen', {props: data})
          }>
          <View style={{paddingLeft: 120, paddingRight: 120}}>
            <Text size={20} variant="sbold" color="#fff">
              {name}
            </Text>
          </View>
        </TouchableOpacity>
        <SearchIcon />
      </View>
    </SafeAreaView>
  );
};

export default Header;
