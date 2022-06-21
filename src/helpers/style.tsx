import tw from "tailwind-styled-components";
import { Style } from "@/helpers";

const twStyledFactory = <T,>(
  Component: React.FC<T> | HTMLElement,
  props: T,
  className?: string,
) => {
  const StyledTailwind = tw(Component)`${(props: T & { className?: string }) => props.className}`;

  return <StyledTailwind {...props} className={className} />;
};

const StyledTailwind = <Props,>({
  component,
  className,
  props,
}: {
  component: React.FC<Props> | HTMLElement;
  props: Props;
  className?: string;
}) => {
  return twStyledFactory(component, props, className);
};

export { StyledTailwind, clsx, twStyledFactory };
