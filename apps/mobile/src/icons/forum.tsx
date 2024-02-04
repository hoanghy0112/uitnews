import Svg, { Path, Rect } from 'react-native-svg';

export default function ForumIcon() {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Rect width="24" height="24" rx="4" fill="#F7634D" />
            <Path
                d="M8 9H16M8 13H14M18 4C18.7956 4 19.5587 4.31607 20.1213 4.87868C20.6839 5.44129 21 6.20435 21 7V15C21 15.7956 20.6839 16.5587 20.1213 17.1213C19.5587 17.6839 18.7956 18 18 18H13L8 21V18H6C5.20435 18 4.44129 17.6839 3.87868 17.1213C3.31607 16.5587 3 15.7956 3 15V7C3 6.20435 3.31607 5.44129 3.87868 4.87868C4.44129 4.31607 5.20435 4 6 4H18Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </Svg>
    );
}
