import spring from '../assets/icon-spring.svg';
import html from '../assets/icon-html.svg';
import css from '../assets/icon-css.svg';
import js from '../assets/icon-js.png';
import ts from '../assets/icon-ts.png';
import java from '../assets/icon-java.svg';
import php from '../assets/icon-php.svg';
import angular from '../assets/icon-angular.png';
import react from '../assets/icon-react.svg';
import next from '../assets/icon-nextjs.svg';
import ci from '../assets/icon-ci.svg';
import mysql from '../assets/icon-mysql.png';
import pg from '../assets/icon-postgre.png';

export const linguagens = [
    { name: 'HTML', icon: html, progress: 100 },
    { name: 'CSS', icon: css, progress: 100 },
    { name: 'JavaScript', icon: js, progress: 90 },
    { name: 'TypeScript', icon: ts, progress: 80 },
    { name: 'Java', icon: java, progress: 80 },
    { name: 'PHP', icon: php, progress: 60 }
]

export const ferramentas = [
    { name: 'Angular', icon: angular, progress: 90 },
    { name: 'Spring', icon: spring, progress: 90 },
    { name: 'React', icon: react, progress: 60 },
    { name: 'NextJS', icon: next, progress: 50 },
    { name: 'CodeIgniter', icon: ci, progress: 50 }
]

export const databases = [
    { name: 'MySQL', icon: mysql, progress: 90 },
    { name: 'PostgreSQL', icon: pg, progress: 80 }
]

export const outros = [
    'JQuery', 'NGINX', 'API REST', 'PrimeNG', 'Bootstrap', 'TailwindCSS', 
    'Vite', 'MaterializeCSS', 'Figma', 'Hibernate', 'Postman', 'Flutter'
]