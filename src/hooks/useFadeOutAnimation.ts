import { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";

type UseFadeOutAnimationProps = {
  onUnmountCallback?: () => void;
};

const useFadeOutAnimation = ({
  onUnmountCallback = () => null,
}: UseFadeOutAnimationProps) => {
  const [shouldStartAnimation, setShouldStartAnimation] = useState(false);

  // Note: This Animated.Value starts at 1 (instead of 0)
  const fadeOutAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (shouldStartAnimation) {
      fadeOut();
    }
    return () => {
      // Reset this Animated.Value to 1
      fadeOutAnim.setValue(1);
    };
  }, [shouldStartAnimation]);

  const fadeOut = () => {
    Animated.timing(fadeOutAnim, {
      // This animated value goes to 0 (because it starts at 1)
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(onUnmountCallback);
  };

  const opacityStyle = {
    opacity: fadeOutAnim,
  };
  const startAnimation = () => setShouldStartAnimation(true);
  return [opacityStyle, startAnimation] as const;
};

export default useFadeOutAnimation;
