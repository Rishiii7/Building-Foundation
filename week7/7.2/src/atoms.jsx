import {atom, selector} from 'recoil'


export const networkAtom = atom({
    key: 'networkAtom',
    default: 19
})


export const jobsAtom = atom({
    key: 'jobsAtom',
    default: 0
})

export const notificationAtom = atom({
    key: 'notificationAtom',
    default: 12
})

export const messagingAtom = atom({
    key: 'messagingAtom',
    default: 10
})


export const totalCountSelector = selector({
    key: 'totalCountSelector',
    get : ({get}) => {
        const newtorkCount = get(networkAtom);
        const jobsCount = get(jobsAtom);
        const notificationCount = get(notificationAtom);
        const messagingCount = get(messagingAtom);

        return newtorkCount + jobsCount + notificationCount + messagingCount;
    }
})