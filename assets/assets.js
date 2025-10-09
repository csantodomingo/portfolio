import user_image from './user-image.png';
import code_icon from './code-icon.png';
import edu_icon from './edu-icon.png';
import hobbies_icon from './hobbies-icon.png';
import download_icon from './download-icon.png';
import arrow_icon from './arrow-icon.png';
import menu_black from './menu-black.png';
import close_black from './close-black.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import me from './me.png';

export const assets = {
    user_image,
    code_icon,
    edu_icon,
    hobbies_icon,
    download_icon,
    arrow_icon,
    menu_black,
    close_black,
    right_arrow,
    send_icon,
    right_arrow_bold,
    me
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const infoList = [
    { icon: assets.code_icon, title: 'Languages', description: 'Python, Java, JavaScript, TypeScript' },
    { icon: assets.edu_icon, title: 'Education', description: 'B.S. in Computer Science and Music Technology' },
    { icon: assets.hobbies_icon, title: 'Hobbies', description: 'Climbing, baking, dance, hiking, music' }
];

export const experiences = [
    { title: 'Research Assistant', date: 'Sept 2025 - Present', company: 'MIND (Music, Imaging, & Neural Dynamics) Lab', summary: 'Conducting research on two projects: how music affects memory in children, and how music intervention can prevent Alzheimers in older adults. Training in MRI and EEG.' },
    { title: 'Organizing Committee Co-op', date: 'Jan 2025 - Jun 2025', company: 'International Computer Music Association', summary: 'Served on the organizing committee for the 50th annual International Computer Music Conference. Cleaned and streamlined registration data using Python and Excel, led the student volunteer committee, and managed housing logistics.' },
    { title: 'Full-Stack Software Engineer Co-op', date: 'Jan 2024 - Jun 2024', company: 'Wood Mackenzie', summary: 'Served as full-stack dev that implemented functionality for B2B product, Lens. Worked on the Gas and LNG dashboard, implementing search functionality and creating new cross-team widgets using Java, Python, and various AWS services.' },
    { title: 'President', date: 'May 2024 - May 2025', company: 'NU Barkada', summary: 'Planned large-scale events for 150+ members by collaborating with Northeastern and external organizations. Led an 11-person executive board, delegating tasks and fostering collaboration while encouraging the promotion of Filipino culture.' },
    { title: 'Performance Coordinator', date: 'May 2023 - May 2024', company: 'NU Barkada', summary: 'Coordinated performances comprised of 100+ dancers to share Filipino culture through traditional and modern dance. Planned and led practices three to seven times a week, while managing and directing twenty choreographers.' },
    { title: 'Freshmen Representative', date: 'Nov 2022 - May 2023', company: 'NU Barkada', summary: 'Organized and ran monthly freshman-only events to cultivate community within the Filipino freshman class. Recruited freshmen through social media outreach and meetings to join the club and improve retention.' },
]