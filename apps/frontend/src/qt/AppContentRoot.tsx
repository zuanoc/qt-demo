import tw from 'twin.macro';
import { useState } from 'react';
import { CanvasContainer } from './canvas/CanvasContainer';

export const AppContentRootDiv = tw.div`
  flex
  flex-grow
`;

export const AppContentRoot = () => {
  const [rootContentDiv, setRootContentDiv] = useState<HTMLDivElement>(null);

  return (
    <AppContentRootDiv>
      <div tw="bg-red-500"></div>
      <div
        ref={instance => setRootContentDiv(instance)}
        tw="flex-grow flex justify-center items-center"
      >
        {rootContentDiv && (
          <CanvasContainer parentRect={rootContentDiv.getBoundingClientRect()} />
        )}
      </div>
      <div>
        <div tw="bg-qtGrey-42 h-full w-72"></div>
      </div>
    </AppContentRootDiv>
  );
};
