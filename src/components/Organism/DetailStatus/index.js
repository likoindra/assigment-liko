import {View, Text, Image, Animated} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import Header from '@Atom/Header';

const DetailStatus = props => {
  const data = props.route.params.props;
  console.log(data, 'data');

  //   const [progress, setProgress] = useState(0);
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const setDuration = 3000; 
    const interval = 100; 

    const steps = setDuration / interval;
    let currentStep = 0;

    const animateProgress = () => {
      if (currentStep < steps) {
        const newProgress = ((currentStep + 1) / steps) * 100;

        Animated.timing(progressAnim, {
          toValue: newProgress,
          duration: setDuration / steps,
          useNativeDriver: false,
        }).start();

        currentStep += 1;
        setTimeout(animateProgress, interval);
      }
    };

    animateProgress();
  }, []);
  return (
    <View style={styles.container}>
      <Header
        detailStatus
        backable
        color="#fff"
        data={data}
        // progress={progress}
        progressAnim={progressAnim}
      />

      <View style={styles.images}>
        <Image source={data?.photo} style={styles.imagesStatus} />
      </View>
    </View>
  );
};

export default DetailStatus;
