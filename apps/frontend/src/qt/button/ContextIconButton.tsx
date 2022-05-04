import React from 'react';
import tw from 'twin.macro';
import { IconButton } from './IconButton';

const GapDiv = tw.div`
  w-0.5 
  h-full 
  bg-black
`;
interface ContextIconButtonProps {
  icon: string;
  disabled?: boolean;
}

export const ContextIconButton: React.FunctionComponent<ContextIconButtonProps> = ({
  icon,
  disabled = false,
}) => (
  <div tw="flex">
    <IconButton tw="px-2" disabled={disabled} icon={icon} />
    <GapDiv />
    <IconButton disabled={disabled} icon="icon-chevron-down" />
  </div>
);
