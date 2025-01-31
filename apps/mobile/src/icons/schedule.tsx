import Svg, { Path } from 'react-native-svg';

export default function ScheduleIcon({ focused }: { focused: boolean }) {
    return (
        <Svg width="22" height="24" viewBox="0 0 22 24" fill="none">
            <Path
                d="M1.0625 9H20.9375C21.2469 9 21.5 9.25313 21.5 9.5625V21.75C21.5 22.9922 20.4922 24 19.25 24H2.75C1.50781 24 0.5 22.9922 0.5 21.75V9.5625C0.5 9.25313 0.753125 9 1.0625 9ZM21.5 6.9375V5.25C21.5 4.00781 20.4922 3 19.25 3H17V0.5625C17 0.253125 16.7469 0 16.4375 0H14.5625C14.2531 0 14 0.253125 14 0.5625V3H8V0.5625C8 0.253125 7.74687 0 7.4375 0H5.5625C5.25312 0 5 0.253125 5 0.5625V3H2.75C1.50781 3 0.5 4.00781 0.5 5.25V6.9375C0.5 7.24687 0.753125 7.5 1.0625 7.5H20.9375C21.2469 7.5 21.5 7.24687 21.5 6.9375Z"
                fill={focused ? '#3FB7E6' : '#CFCFCF'}
            />
        </Svg>
    );
}
