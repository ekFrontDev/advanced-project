import { useTranslation } from 'react-i18next';
import cls from './MainPage.module.scss';
import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation();
    return <div className={cls.main}>
        <BugButton />
        {t('Главная')}
    </div>;
};

export default MainPage;
