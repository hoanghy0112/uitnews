import { Spinner } from '@gluestack-ui/themed';
import {
    GoogleSignin,
    GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import React from 'react';
import { Image, Text, View } from 'react-native';
import GOOGLE_TASK_ICON from '../../assets/task-icon.png';
import NativeButton from '../../src/components/NativeButton/NativeButton';
import { useSyncEventMutation } from '../../src/gql/graphql';
import { useGoogleSignin } from '../../src/hooks/google/useGoogleSignin';
import { useAuth } from '../../src/stores/auth.store';
import { timeDiffString } from '../../src/utils/timeDiff';

export default function GoogleIntegration() {
    const { isIntegrateWithGoogle, googleData, setGoogleData, signOutGoogle } =
        useAuth();

    const { signIn } = useGoogleSignin();

    const [syncEvent, { data, loading, error }] = useSyncEventMutation();

    return (
        <View className=" flex-1 w-full items-center bg-white pt-2 px-6">
            {isIntegrateWithGoogle && googleData ? (
                <View className=" flex-1 w-full">
                    <View className="mx-4 p-4 rounded-md flex flex-row gap-4">
                        <Image
                            source={{ uri: googleData.photo }}
                            className=" w-12 h-12 rounded-full"
                        />
                        <View className=" flex flex-col gap-[2px]">
                            <Text className=" font-semibold text-lg">
                                {googleData.name}
                            </Text>
                            <Text className=" text-neutral-40">
                                {googleData.email}
                            </Text>
                        </View>
                    </View>
                    <NativeButton
                        className=" mx-6 mt-5"
                        onPress={async () => {
                            await GoogleSignin.signOut();
                            signOutGoogle();
                        }}
                    >
                        <View className=" p-4 px-10 rounded-2xl bg-[#FE5050] flex-row justify-center gap-2">
                            <Text className=" text-white font-medium">
                                Đăng xuất
                            </Text>
                        </View>
                    </NativeButton>
                    <View className=" mt-10 h-[0.5px] mx-10 bg-neutral-40"></View>
                    <View className=" mx-6 mt-5">
                        <NativeButton
                            className=" mt-5"
                            onPress={async () => {
                                const userInfo =
                                    await GoogleSignin.signInSilently();
                                const token = await GoogleSignin.getTokens();
                                setGoogleData({
                                    ...userInfo.user,
                                    ...token,
                                    lastSync: new Date().getTime(),
                                });
                                syncEvent({
                                    variables: {
                                        accessToken: token.accessToken,
                                        googleUserId: userInfo.user.id,
                                    },
                                });
                            }}
                        >
                            <View className=" p-4 px-10 rounded-2xl border-primary-60 border-[1px] bg-white flex-row justify-center gap-2">
                                {loading ? (
                                    <>
                                        <Spinner />
                                        <Text className="color-primary-60 font-medium">
                                            Đang đồng bộ dữ liệu...
                                        </Text>
                                    </>
                                ) : (
                                    <>
                                        <Text className="color-primary-60 font-medium">
                                            Đồng bộ với Google Task
                                        </Text>
                                        <Image
                                            style={{ width: 20, height: 20 }}
                                            source={GOOGLE_TASK_ICON}
                                        />
                                    </>
                                )}
                            </View>
                        </NativeButton>
                        {googleData.lastSync && !loading ? (
                            <View className=" mx-4 mt-3">
                                <Text className=" text-neutral-30 text-center">{`Đồng bộ lần cuối: ${timeDiffString(new Date(googleData.lastSync))}`}</Text>
                            </View>
                        ) : null}
                    </View>
                </View>
            ) : (
                <>
                    <GoogleSigninButton
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Light}
                        onPress={signIn}
                    />
                </>
            )}
        </View>
    );
}
