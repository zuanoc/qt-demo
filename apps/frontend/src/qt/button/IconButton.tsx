import tw from 'twin.macro';

export const IconBtn = tw.button`
  flex flex-row
  justify-between 
  items-center
  text-white    
  cursor-pointer
  hover:(text-white bg-qtGrey-70)
  disabled:(text-black bg-qtGrey-42)
  hover:disabled:(text-white bg-qtGrey-70)
`;

export const IconDiv = tw.div`
  text-xl p-2
`;

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  disabled?: boolean;
}

export const IconButton: React.FunctionComponent<IconButtonProps> = props => (
  <IconBtn {...props}>
    <IconDiv className={props.icon} />
  </IconBtn>
);
