import { useMemo } from "react";
import { User } from "../../context/all-user-score";

import { Box } from "@chakra-ui/react";
import { EmptyDisplay } from "../common/empty-component";
import { SingleLoggedFish } from "./single-logged-fish";

export const AllLoggedFish = ({ user }: { user: User }) => {
  const renderFish = useMemo(() => {
    return user?.allFish?.map(
      (
        { name, scoredPoints, id, region, recordedWeight, specimenWeight },
        index
      ) => {
        return (
          <SingleLoggedFish
            id={id}
            name={name}
            isFirst={index === 0}
            key={id}
            scoredPoints={scoredPoints}
            region={region}
            recordedWeight={recordedWeight}
            specimenWeight={specimenWeight}
          />
        );
      }
    );
  }, [user]);
  if (!renderFish) {
    return <EmptyDisplay text="There seems to be nothing to show." />;
  }
  return (
    <>
      <Box border="1px rgba(0,0,0,0.4) solid" borderRadius="5px">
        {renderFish}
      </Box>
    </>
  );
};
