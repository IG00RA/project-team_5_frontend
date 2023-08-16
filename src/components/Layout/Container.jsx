import {Box} from "./Container.styled";

export const Container = (children, className) => {
    return (
      <Box className={className}>
        {children}
      </Box>
    );
  };
