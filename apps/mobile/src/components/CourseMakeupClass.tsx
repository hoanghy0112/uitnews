import { DeepPartial } from '@apollo/client/utilities';
import { Text, View } from 'react-native';
import { MakeUpClass } from '../gql/graphql';
import { dateToShortString } from '../utils/dateToString';
import { timeDiff } from '../utils/timeDiff';
import NativeButton from './NativeButton/NativeButton';

export default function CourseMakeupClass({
    makeupClass,
}: {
    makeupClass: DeepPartial<MakeUpClass>;
}) {
    const { time, type } = timeDiff(new Date(makeupClass.time));

    return (
        <View className="">
            <Text className=" mx-4 mt-4 font-semibold">Các thông báo</Text>
            <NativeButton borderRadius={0} className=" mt-5">
                <View className=" p-4 bg-primary-95">
                    <View className=" flex-row items-center gap-4">
                        <Text className="p-2 rounded-lg bg-primary-70 font-medium text-sm text-white">{`Còn ${-time} ${type} nữa`}</Text>
                        <Text className=" font-medium text-sm">
                            {dateToShortString(
                                new Date(makeupClass.time),
                                'long',
                            )}
                        </Text>
                    </View>
                    <Text className=" mt-4 text-sm text-zinc-500">
                        {makeupClass.courseCode}
                    </Text>
                    <Text className=" mt-1 font-medium text-lg">
                        {makeupClass.title}
                    </Text>
                    <View style={{ marginTop: 30 }} className=" flex-row gap-4">
                        {makeupClass.classroom ? (
                            <Text
                                style={{ backgroundColor: '#BFE9FF' }}
                                className=" p-2 rounded-lg text-sm font-medium"
                            >
                                {`Phòng ${makeupClass.classroom}`}
                            </Text>
                        ) : null}
                        <Text
                            style={{ backgroundColor: '#BFE9FF' }}
                            className=" p-2 rounded-lg text-sm font-medium"
                        >
                            {`Từ tiết ${makeupClass.start} đến tiết ${makeupClass.end}`}
                        </Text>
                    </View>
                </View>
            </NativeButton>
        </View>
    );
}
