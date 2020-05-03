import React from 'react';
import cn from 'classnames';

export type Props = {
    classes?: any;
    labelText: string;
    variant?: string;
    htmlFor?: string;
    formType?: string;
};
const Input = (props: Props) => {
    const { classes, labelText, variant, htmlFor, formType } = props;
    return (
        <label htmlfor={htmlFor} className={cn(classes.root, classes[formType], classes[variant])}>
            <div className={classes[formType]}>{labelText}</div>
        </label>
    )
};

Input.defaultProps = {
    formType: 'text',
    variant: 'primary',
};
export default { Input };