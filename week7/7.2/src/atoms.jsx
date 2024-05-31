import axios from 'axios';
import {atom, selector} from 'recoil'


// export const networkAtom = atom({
//     key: 'networkAtom',
//     default: 19
// })


// export const jobsAtom = atom({
//     key: 'jobsAtom',
//     default: 0
// })

// export const notificationAtom = atom({
//     key: 'notificationAtom',
//     default: 12
// })

// export const messagingAtom = atom({
//     key: 'messagingAtom',
//     default: 10
// })

// export const totalCountSelector = selector({
//     key: 'totalCountSelector',
//     get : ({get}) => {
//         const newtorkCount = get(networkAtom);
//         const jobsCount = get(jobsAtom);
//         const notificationCount = get(notificationAtom);
//         const messagingCount = get(messagingAtom);

//         return newtorkCount + jobsCount + notificationCount + messagingCount;
//     }
// })


export const linkedlnAtom = atom({
    key: 'linkedlnAtom',
    default: selector({
        key: 'linkedlnAtomSelector',
        get: async () => {
            // await new Promise(r => setTimeout(r, 5000)); // Artificial delay
            const linkedln = await axios.get('https://sum-server.100xdevs.com/notifications');
            return linkedln.data;
        }
    }),
});





export const totalLinkedlnSelector = selector({
    key: 'totalLinkedlnSelector',
    get : ({get}) => {
        const linkedln = get(linkedlnAtom);
        // console.log(`linkedln is ${linkedln}`)
        const totalCount = linkedln.jobs + linkedln.network + linkedln.messaging + linkedln.notifications;
        // console.log(totalCount);
        return totalCount;
    }
})