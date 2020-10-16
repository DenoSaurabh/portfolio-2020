import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import { useAlert } from '../../state/alert.recoil';

import { NeueLightMiniText } from '../../styles/typography';

const AlertS = styled(motion.div)`
  position: fixed;
  left: 50%;

  width: 30%;
  min-width: 200px;
  height: fit-content;

  overflow: hidden;

  transform: translateX(-50%);

  padding: 2rem 2rem;

  background: #fff;

  border-radius: 8px;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.08);
`;

const Alert = () => {
  const { alertStatus, updateAlertStatus } = useAlert();

  useEffect(() => {
    setTimeout(() => updateAlertStatus(null), 2000);
  }, []);

  return (
    <AnimatePresence>
      <AlertS
        initial={{ top: '0%', opacity: 0 }}
        animate={{ top: '5%', opacity: 1 }}
        transition={{ type: 'spring', stiffness: 150 }}
        exit={{ top: '0%', opacity: 0 }}
      >
        <NeueLightMiniText>{alertStatus}</NeueLightMiniText>
      </AlertS>
    </AnimatePresence>
  );
};

const AlertContainer = () => {
  const { alertStatus } = useAlert();

  return alertStatus ? <Alert /> : null;
};

export default AlertContainer;
