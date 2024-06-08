import { FC, ReactNode } from "react";
import { Spinner } from "./Spinner";

interface IProps {
  children: ReactNode;
  color?:
    | "blue"
    | "theme"
    | "green"
    | "warning"
    | "failure"
    | "sky"
    | "gray"
    | "purple";
  outline?: boolean;
  outlineColor?: boolean;
  size?: "sm" | "md" | "auto" | "min" | "auth";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  title?: string;
  className?: string;
  spinner?: boolean;
  isLoading?: boolean;
}
interface IStyle {
  bg: {
    [param: string]: string;
  };
  border: {
    [param: string]: string;
  };
  text: {
    [param: string]: string;
  };
  size: {
    [param: string]: string;
  };
}
const style: IStyle = {
  bg: {
    blue: "bg-blue-900 hover:bg-blue-800",
    theme: `bg-cciod-white-100 dark:bg-cciod-black-300 hover:bg-opacity-80`,
    green: "bg-green-500 hover:bg-green-600",
    warning: "bg-yellow-500 hover:bg-yellow-600",
    failure: "bg-red-500 hover:bg-red-600",
    sky: "bg-sky-500 hover:bg-sky-600",
    gray: "bg-gray-500 hover:bg-gray-600",
    purple: "bg-purple-500 hover:bg-purple-600",
  },
  border: {
    blue: "border-blue-900",
    theme: "border-cciod-black-200 dark:border-cciod-black-300",
    green: "border-green-500",
    warning: "border-yellow-500",
    failure: "border-red-500",
    sky: "border-sky-500",
    gray: "border-gray-500",
    purple: "border-purple-500",
  },
  text: {
    blue: "text-blue-900",
    theme: "text-cciod-black-300 dark:text-cciod-white-200",
    green: "text-green-500",
    warning: "text-yellow-500",
    failure: "text-red-500",
    sky: "text-sky-500",
    gray: "text-gray-500",
    purple: "text-purple-500",
  },
  size: {
    auto: "w-[7.5rem] py-2",
    auth: "px-3 py-2",
    sm: "text-sm px-1 py-1 w-20 text-center",
    md: "px-3 h-9 w-[5rem]",
    min: "size-9",
  },
};
const defaultCss =
  "rounded-md flex justify-center items-center gap-2 transition-colors";
export const Button: FC<IProps> = ({
  children,
  color = "blue",
  outline = false,
  outlineColor = false,
  size = "auto",
  type = "button",
  onClick,
  title,
  className,
  spinner = false,
  isLoading = false,
}) => {
  const handleClick = () => {
    if (onClick) onClick();
  };
  const textColor = outlineColor ? style.text[color] : "";
  const border = outline
    ? `border ${style.border[color]} bg-transparent hover:bg-opacity-10 ${textColor}`
    : "text-cciod-white-100";
  const borderTheme = outline
    ? "border border-cciod-black-300 dark:border-transparent"
    : "";
  const borderBtn = color === "theme" ? borderTheme : border;
  return (
    <button
      type={type}
      className={`${style.bg[color]} ${borderBtn} ${style.size[size]} ${defaultCss} ${className}`}
      onClick={() => handleClick()}
      title={title}
    >
      {spinner && isLoading && <Spinner size="sm" color={color} />}
      {children}
    </button>
  );
};
