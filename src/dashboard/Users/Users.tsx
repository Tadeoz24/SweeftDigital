import { useState } from "react";
import styled from "styled-components";

// import interfaces
import { breadcrumbsProps } from "../../App";

// import components
import { Loading, User } from "../../components";

// import infinite scroll
import useScrollTrigger from "../../ScrollTrigger/useScrollTrigger";

//
const SIZE = 20;

export interface UsersProps {
  id: number;
  name: string;
  lastName: string;
  prefix: string;
  title: string;
  imageUrl: string;
}

interface UsersComponentProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  breadcrumbs: breadcrumbsProps[];
  setBreadcrumbs: React.Dispatch<React.SetStateAction<breadcrumbsProps[]>>;
}

export interface DataProps {
  id: number;
  name: string;
  lastName: string;
  prefix: string;
  title: string;
  imageUrl: string;
}

function Users({
  page,
  setPage,
  breadcrumbs,
  setBreadcrumbs,
}: UsersComponentProps) {
  //
  const [data, setData] = useState<DataProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  //
  useScrollTrigger(
    `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/${SIZE}`,
    data,
    setData,
    setIsLoading,
    isLoading,
    page,
    setPage
  );

  return (
    <Container>
      {data.map((user) => {
        return (
          <User
            key={user.id}
            user={user}
            breadcrumbs={breadcrumbs}
            setBreadcrumbs={setBreadcrumbs}
          />
        );
      })}
      {isLoading ? <Loading /> : null}
    </Container>
  );
}

export default Users;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;
