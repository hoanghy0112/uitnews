import { router } from 'expo-router';
import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    useWindowDimensions,
    View,
} from 'react-native';
import Animated, {
    FadeInDown,
    FadeOutUp,
    measure,
    runOnUI,
    useAnimatedRef,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import RenderHtml from 'react-native-render-html';
import AssignIcon from '../../icons/assign';
import FolderIcon from '../../icons/folder';
import ForumIcon from '../../icons/forum';
import ResourceIcon from '../../icons/resource';
import Chevron from './Chevron';
import { CourseModuleEntity } from '../../gql/graphql';
import { useDetailFolderRouter } from '../../stores/folder-detail.store';
import UrlIcon from '../../icons/url';
import LabelIcon from '../../icons/label';

type Props = {
    value: {
        name: string;
        summary?: string;
        course_id: number;
        contents: CourseModuleEntity[];
    };
};

const CourseContentAccordion = ({ value }: Props) => {
    const { navigateFolder } = useDetailFolderRouter();

    const { width } = useWindowDimensions();

    const listRef = useAnimatedRef();
    const heightValue = useSharedValue(0);
    const open = useSharedValue(false);
    const progress = useDerivedValue(() =>
        open.value ? withTiming(1) : withTiming(0),
    );

    const heightAnimationStyle = useAnimatedStyle(() => ({
        height: heightValue.value,
    }));

    return (
        <View className=" border-primary-60 border-[0.5px] rounded-2xl overflow-hidden">
            <TouchableNativeFeedback
                onPress={() => {
                    if (heightValue.value === 0) {
                        runOnUI(() => {
                            'worklet';
                            heightValue.value = withTiming(
                                measure(listRef)!.height,
                            );
                        })();
                    } else {
                        heightValue.value = withTiming(0);
                    }
                    open.value = !open.value;
                }}
            >
                <View className=" w-full p-4 flex-row justify-between items-center">
                    <Text className=" flex-1 font-semibold mr-2">
                        {value.name}
                    </Text>
                    {value.contents.length > 0 || value.summary ? (
                        <Chevron progress={progress} />
                    ) : null}
                </View>
            </TouchableNativeFeedback>
            <Animated.View style={heightAnimationStyle}>
                <Animated.View style={styles.contentContainer} ref={listRef}>
                    <View className=" px-4">
                        <RenderHtml
                            contentWidth={width - 50}
                            baseStyle={{
                                padding: 0,
                                margin: 0,
                            }}
                            source={{ html: value.summary }}
                        />
                    </View>
                    {value.contents.map(
                        ({ courseContents, name, modname, id }, i) => {
                            return (
                                <TouchableNativeFeedback
                                    key={i}
                                    onPress={() => {
                                        if (modname === 'assign') {
                                            router.push({
                                                pathname:
                                                    '/modals/detail-activity',
                                                params: {
                                                    id,
                                                    assignment_id: id,
                                                    course_id:
                                                        value.course_id || '',
                                                },
                                            });
                                        } else {
                                            navigateFolder(value.contents[i]);
                                        }
                                    }}
                                >
                                    <View className=" w-full flex flex-row gap-4 items-center px-3 py-4 border-t-[0.2px] border-t-neutral-60">
                                        <Animated.View
                                            entering={FadeInDown}
                                            exiting={FadeOutUp}
                                        >
                                            {modname === 'resource' ? (
                                                <ResourceIcon />
                                            ) : modname === 'folder' ? (
                                                <FolderIcon />
                                            ) : modname === 'forum' ? (
                                                <ForumIcon />
                                            ) : modname === 'url' ? (
                                                <UrlIcon />
                                            ) : modname === 'label' ? (
                                                <LabelIcon />
                                            ) : modname === 'assign' ? (
                                                <AssignIcon />
                                            ) : (
                                                <></>
                                            )}
                                        </Animated.View>
                                        <View className="flex-1">
                                            <Text className=" font-medium">
                                                {name}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableNativeFeedback>
                            );
                        },
                    )}
                </Animated.View>
            </Animated.View>
        </View>
    );
};

export default CourseContentAccordion;

const styles = StyleSheet.create({
    contentContainer: {
        position: 'absolute',
        width: '100%',
        top: 0,
    },
});
