/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';

import {
  typography,
  TypographyProps,
  textStyle,
  TextStyleProps,
  shadow,
  ShadowProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
  border,
  BorderProps,
  position,
  PositionProps,
  buttonStyle,
  ButtonStyleProps,
} from 'styled-system';

export const Button = styled.button<
  ColorProps &
    LayoutProps &
    TypographyProps &
    SpaceProps &
    FlexboxProps &
    TextStyleProps &
    BorderProps &
    ShadowProps &
    SpaceProps &
    PositionProps &
    ButtonStyleProps
>(
  {
    appearance: 'none',
    whiteSpace: 'normal',
    '&:hover, :active': {
      transition: 'background 0.1s, border 0.2s',
      bottom: '3px',
      cursor: 'pointer',
      buttonShadow: '0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.1)',
    },
    '&:focus': {
      outlineWidth: 0,
    },
  },
  color,
  layout,
  space,
  flexbox,
  border,
  position,
  typography,
  textStyle,
  shadow,
  buttonStyle,
);
