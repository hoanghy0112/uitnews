import { router } from 'expo-router';
import { TouchableOpacity, View } from 'react-native';
import DrawerIcon from '../icons/drawer';
import MessageIcon from '../icons/message';
import NotificationIcon from '../icons/notification';

export default function PageHeader() {
    return (
        <View className=" px-4 py-2 flex flex-row">
            <TouchableOpacity className=" p-1 mr-auto">
                <DrawerIcon />
            </TouchableOpacity>
            <View className=" flex flex-row gap-6">
                <TouchableOpacity
                    onPress={() => {
                        router.push('/modals/chat-list');
                    }}
                    className=" p-1"
                >
                    <MessageIcon />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        router.push('/modals/makeup-classes');
                    }}
                    className=" p-1"
                >
                    <NotificationIcon />
                </TouchableOpacity>
            </View>
        </View>
    );
}
