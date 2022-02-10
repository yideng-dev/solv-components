import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import './button.css';
import c from 'classnames';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';
interface BaseButtonProps {
  /**
   * 是否默认为主按钮
   */
  primary?: boolean;
  /**
   * Button 的类型 a按钮或者常规button
   */
  btnType?: ButtonType;
  /**
   * 按钮背景颜色
   */
  backgroundColor?: string;
  /**
   * 按钮大小尺寸
   */
  size?: ButtonSize;
  /**
   * 按钮文本内容
   */
  label: string;
  /**
   * a标签的href属性
   */
  href?: string;
  /**
   * 回调事件选项
   */
  onClick?: () => void;
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * Button组件包含(a link)版本
 */
export const Button = ({
  primary = false,
  btnType,
  size = 'medium',
  backgroundColor,
  className,
  label,
  href,
  ...props
}: ButtonProps) => {
  const classes = c('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`storybook-button---${size}`]: size,
  });

  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  const btnclass = c('storybook-button', mode, `storybook-button--${size}`);
  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href}>
        {label}
      </a>
    );
  } else {
    return (
      <button
        type="button"
        className={btnclass}
        style={{ backgroundColor }}
        {...props}
      >
        {label}
      </button>
    );
  }
};
