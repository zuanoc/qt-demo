import tw, { styled, css } from 'twin.macro';

const AppFooterDiv = styled.div([
  tw`
    flex flex-row
    min-h-6 bg-qtGrey-25
    mt-px
    text-xs
    text-white
    items-center
    px-4 
  `,
  css`
    > div {
      ${tw`
        px-2
      `}
    }
    > div:not(:first-of-type) {
      ${tw`
        border-0 border-l 
        border-solid 
        border-qtGrey-42
      `}
    }
  `,
]);

export const AppFooter = () => {
  return (
    <AppFooterDiv>
      <div>X: 22.643 Y: 0.000 Z: 148.796</div>
      <div tw="flex items-center">
        <span>Visualization</span>
        <span tw="ml-2" className="icon-chevron-up"></span>
      </div>
      <div tw="flex items-center">
        <span tw="mr-2" className="icon-monitor"></span>
        <span>Show errors</span>
      </div>
    </AppFooterDiv>
  );
};
