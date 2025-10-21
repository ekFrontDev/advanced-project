import type { Preview } from '@storybook/react-webpack5';
import { 
    StyleDecorator
} from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'; 

export const preview: Preview = {
    decorators: [
        StyleDecorator,
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

