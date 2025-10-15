import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';

interface PageErrorProps {
    className?: string
}

const PageError = ({className}: PageErrorProps) => {
    const {t} = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <div>
                {t('Произошла непредвиденная ошибка')}
            </div>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};

export default PageError;