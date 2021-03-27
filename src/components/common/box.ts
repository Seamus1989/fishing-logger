/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';
import {
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
} from 'styled-system';

export const Box = styled.div<
  ColorProps &
    LayoutProps &
    SpaceProps &
    FlexboxProps &
    BorderProps &
    PositionProps
>(color, layout, space, flexbox, border, position);
