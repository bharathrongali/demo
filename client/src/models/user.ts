/* B"H
*/

export interface User {
    firstName: string;
    lastName: string;
    handle: string;
    password: string;
    email: string;
    pic: string;
    id: number;
}

export const list: User[] = [
    {
        firstName: 'Bharath',
        lastName: 'Rongali',
        handle: 'Yuvi',
        password: 'yuvi3',
        email: 'rongali.com',
        pic: 'https://randomuser.me/api/portraits/men/1.jpg',
        id: 1,
    },
    {
        firstName: 'Yash',
        lastName: 'Ghatge',
        handle: 'kolapur',
        password: 'yash',
        email: 'yash.com',
        pic: 'https://randomuser.me/api/portraits/men/2.jpg',
        id: 2,
    },
    {
        firstName: 'Naveena',
        lastName: 'Kota',
        handle: 'teacher',
        password: 'kota',
        email: 'kota.com',
        pic: 'https://randomuser.me/api/portraits/women/3.jpg',
        id: 3,
    },
];
