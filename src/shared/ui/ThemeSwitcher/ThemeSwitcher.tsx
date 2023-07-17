import { useDispatch, useSelector } from 'react-redux';

import { Mode } from '~/store/theme/theme.constants';
import { selectIsDark, selectIsLight } from '~/store/theme/theme.selectors';
import { themeActions } from '~/store/theme/theme.slice';

import { Button } from '../Button/Buttons';

export const ThemeSwitcher = () => {
  const isLight = useSelector(selectIsLight);
  const isDark = useSelector(selectIsDark);
  const dispatch = useDispatch();

  const handleDarkModeClick = () => {
    dispatch(themeActions.changeTheme(Mode.Dark));
  };

  const handleLightModeClick = () => {
    dispatch(themeActions.changeTheme(Mode.Light));
  };

  return (
    <div>
      <Button
        appearance="primary"
        onClick={handleLightModeClick}
        disabled={isLight}
      >
        light
      </Button>
      <Button
        appearance="primary"
        onClick={handleDarkModeClick}
        disabled={isDark}
      >
        dark
      </Button>
    </div>
  );
};
