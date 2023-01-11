import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import Image1 from './../Lead-image.jpg'
import Image2 from './../image-2.jpg'
import Image3 from './../image3.jpg'
import Heart from './../heart.svg'
import FullHeart from './../fullHeart.svg'

export const TopChartsLinks = [
{
    id:1,
    images:Image1,
    title:'Trending R & B',
    subtitle:'DJ Esteem',
    duration:'53:00',
    heart:Heart,
    collection:FullHeart,
},
{
    id:2,
    images:Image2,
    title:'Tomorrow Tune',
    subtitle:'DJ Yk Mule',
    duration:'36:20',
    heart:Heart,
    collection:FullHeart,
},
{
    id:3,
    images:Image3,
    title:'Naija Pop Music',
    subtitle:'Omo Baba Remix',
    duration:'54:50',
    heart:Heart,
    collection:FullHeart,
},
]
export const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];
