import './index.html';
import css from "./style/style.css";
import { init } from './scripts/_webcam';



navigator.getMedia = (navigator.getUserMedia || // use the proper vendor prefix
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);

navigator.getMedia({ video: true }, function () {
    // webcam is available
    init()
}, function () {
    // webcam is not available
});
