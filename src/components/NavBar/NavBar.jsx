import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';

export const NavBar = ({ name }) => {
  return (
    <Flex direction="column" m={10}>
      <Box p={10}>{name}</Box>
    </Flex>
  );
};

NavBar.propTypes = {
  name: PropTypes.string.isRequired
};

export default NavBar;
