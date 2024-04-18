import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export type INotificationConfig = {
    isVibration: boolean;
    isDimissible: boolean;
    isNotifyAtTheBeginingOfDay: boolean;
    timeBefore: number;
    setVibration: (value: boolean) => any;
    setDismissible: (value: boolean) => any;
    setTimeBefore: (value: number) => any;
    setIsNotifyAtTheBeginingOfDay: (value: boolean) => any;
    setNotitificationConfig: (config: Partial<INotificationConfig>) => any;
};

export const useNotificationConfig = create<
    INotificationConfig,
    [['zustand/persist', never], ['zustand/immer', never]]
>(
    persist(
        immer<INotificationConfig>((set, get) => ({
            isVibration: false,
            isDimissible: true,
            isNotifyAtTheBeginingOfDay: true,
            timeBefore: 1,
            setVibration: (isVibration) => {
                set((state) => {
                    state.isVibration = isVibration;
                });
            },
            setDismissible: (isDimissable) => {
                set((state) => {
                    state.isDimissible = isDimissable;
                });
            },
            setTimeBefore: (timeBefore) => {
                set((state) => {
                    state.timeBefore = timeBefore;
                });
            },
            setIsNotifyAtTheBeginingOfDay: (isNotifyAtTheBeginingOfDay) => {
                set((state) => {
                    state.isNotifyAtTheBeginingOfDay =
                        isNotifyAtTheBeginingOfDay;
                });
            },
            setNotitificationConfig(config) {
                set((state) => {
                    state = { ...state, ...config };
                });
            },
        })),
        {
            name: 'notification-config',
            storage: createJSONStorage(() => AsyncStorage),
        },
    ),
);
