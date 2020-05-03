import { compose } from 'redux';
import { memo, SFC } from 'react';
import { Props } from './Input';
import { input } from './Input.styles';

const enhance = compose<SFC<Props>>(
    memo,
    withStyles(input),
);
export { enhance };