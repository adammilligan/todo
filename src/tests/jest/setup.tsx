import { TextEncoder } from 'util';

// Мок работы TextEncoder браузера
global.TextEncoder = TextEncoder;
