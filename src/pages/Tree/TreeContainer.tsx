import React, { useEffect, useState } from "react";
import { Person } from "../../models/Person";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { useDynasty } from "../../api/dynasty";
import { useParams } from "react-router-dom";

interface Props {}

const TreeContainer: React.FC<Props> = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isFetching } = useDynasty(id);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!ready) {
      setTimeout(() => {
        setReady(true);
      }, 1);
      setTimeout(() => {
        setReady(false);
      }, 1);
    }
  }, [isFetching, ready]);

  if (data) {
    return (
      <TransformWrapper
        options={{
          limitToBounds: false,
        }}
      >
        <TransformComponent>
          <div
            style={{ width: "100vw", height: "100vh" }}
            className={"tree-container"}
          >
            {/* <RelationshipNode
              person={data.members[0] as Person}
              partner={data.members[1] as Person}
              people={data.members}
            /> */}
          </div>
        </TransformComponent>
      </TransformWrapper>
    );
  }
  return <div>No data</div>;
};

export default TreeContainer;
