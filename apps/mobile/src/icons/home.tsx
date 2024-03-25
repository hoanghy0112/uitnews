import Svg, { Path } from 'react-native-svg';

export default function HomeIcon({ focused }: { focused: boolean }) {
    return (
        <Svg width="22" height="24" viewBox="0 0 22 24" fill="none">
            <Path
                id="Vector"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.60001 8.4C1.96349 8.4 1.35304 8.14714 0.902956 7.69706C0.452868 7.24697 0.200012 6.63652 0.200012 6V2.4C0.200012 1.76348 0.452868 1.15303 0.902956 0.702944C1.35304 0.252856 1.96349 0 2.60001 0H7.40001C8.03653 0 8.64698 0.252856 9.09707 0.702944C9.54715 1.15303 9.80001 1.76348 9.80001 2.4V6C9.80001 6.63652 9.54715 7.24697 9.09707 7.69706C8.64698 8.14714 8.03653 8.4 7.40001 8.4H2.60001ZM2.60001 24C1.96349 24 1.35304 23.7471 0.902956 23.2971C0.452868 22.847 0.200012 22.2365 0.200012 21.6V12C0.200012 11.3635 0.452868 10.753 0.902956 10.3029C1.35304 9.85286 1.96349 9.6 2.60001 9.6H7.40001C8.03653 9.6 8.64698 9.85286 9.09707 10.3029C9.54715 10.753 9.80001 11.3635 9.80001 12V21.6C9.80001 22.2365 9.54715 22.847 9.09707 23.2971C8.64698 23.7471 8.03653 24 7.40001 24H2.60001ZM14.6 24C13.9635 24 13.353 23.7471 12.903 23.2971C12.4529 22.847 12.2 22.2365 12.2 21.6V19.2C12.2 18.5635 12.4529 17.953 12.903 17.5029C13.353 17.0529 13.9635 16.8 14.6 16.8H19.4C20.0365 16.8 20.647 17.0529 21.0971 17.5029C21.5472 17.953 21.8 18.5635 21.8 19.2V21.6C21.8 22.2365 21.5472 22.847 21.0971 23.2971C20.647 23.7471 20.0365 24 19.4 24H14.6ZM14.6 14.4C13.9635 14.4 13.353 14.1471 12.903 13.6971C12.4529 13.247 12.2 12.6365 12.2 12V2.4C12.2 1.76348 12.4529 1.15303 12.903 0.702944C13.353 0.252856 13.9635 0 14.6 0H19.4C20.0365 0 20.647 0.252856 21.0971 0.702944C21.5472 1.15303 21.8 1.76348 21.8 2.4V12C21.8 12.6365 21.5472 13.247 21.0971 13.6971C20.647 14.1471 20.0365 14.4 19.4 14.4H14.6Z"
                fill={focused ? '#3FB7E6' : '#CFCFCF'}
            />
        </Svg>
    );
}
