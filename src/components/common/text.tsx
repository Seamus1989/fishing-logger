/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';

import {
  color,
  ColorProps,
  typography,
  TypographyProps,
  textStyle,
  TextStyleProps,
  shadow,
  ShadowProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system';

export const Text = styled.p<
  ColorProps &
    TypographyProps &
    TextStyleProps &
    ShadowProps &
    PositionProps &
    SpaceProps
>(color, typography, textStyle, shadow, position, space);

Text.defaultProps = {
  margin: 0,
};
