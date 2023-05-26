import { FaPhp } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { SiJavascript } from 'react-icons/si';
import { FaLaravel } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';


export default [
    {
        title: 'PHP',
        description: 'Menguasai Pemrograman PHP dan sedang lebih mendalami hal lainnya.',
        icon: <FaPhp className='w-full h-full'></FaPhp>
    },
    {
        title: 'Javascript',
        description: 'Menguasai Pemrograman Javascript sejak kelas 9, dan sedang mendalami framework JS',
        icon: <SiJavascript className='w-full h-full'></SiJavascript>
    },
    {
        title: 'Web Development',
        description: 'Memiliki pemahaman yang baik dalam pengembangan web secara umum dan sedang menguasai beberapa framework.',
        icon: <VscCode className='w-full h-full'></VscCode>
    },
    {
        title: 'Laravel',
        description: 'Menguasai framework Laravel, yang merupakan framework PHP populer untuk pengembangan web.',
        icon: <FaLaravel className='w-full h-full'></FaLaravel>
    },
    {
        title: 'React',
        description: 'Sedang mempelajari dan menguasai framework React, yang sangat populer untuk pengembangan antarmuka pengguna.',
        icon: <FaReact className='w-full h-full'></FaReact>
    },
    {
        title: 'HTML & CSS',
        description: 'Memiliki pemahaman yang baik tentang HTML dan CSS, yang merupakan fondasi penting dalam pembuatan tampilan dan struktur situs web.',
        icon: <FaHtml5 className='w-full h-full'></FaHtml5>
    },
]
