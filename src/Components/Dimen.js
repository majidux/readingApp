import {Dimensions,PixelRatio} from "react-native";
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
const widthPercentage = yourWidthPercentage => {
    const itemWidth =parseFloat(yourWidthPercentage);
    return PixelRatio.roundToNearestPixel(deviceWidth * itemWidth / 100);
};
const heightPercentage = yourHeightPercentage => {
    const itemHeight = parseFloat(yourHeightPercentage);
    return PixelRatio.roundToNearestPixel(deviceHeight * itemHeight / 100);
};
const listenOrientationChange = that => {
    Dimensions.addEventListener('change', newDimensions => {
    screenWidth = newDimensions.window.width;
    screenHeight = newDimensions.window.height;
    that.setState({
        orientation: deviceWidth < deviceHeight ? 'portrait':'landscape'
    });
    });
};
const removeOrientationListener = () => {
    Dimensions.removeEventListener('change', () => {});
};
export {
    widthPercentage,
    heightPercentage,
    listenOrientationChange,
    removeOrientationListener
};