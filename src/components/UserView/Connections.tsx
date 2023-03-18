import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

// import interface
import { breadcrumbsProps } from "../../App";

// import components
import { Loading, User } from "..";

// import styled components
import { Container, UsersProps } from "../../dashboard/Users/Users";

// import infinite scroll
import useScrollTrigger from "../../ScrollTrigger/useScrollTrigger";

interface FriendsComponentProps {
  userId: string | undefined;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  breadcrumbs: breadcrumbsProps[];
  setBreadcrumbs: React.Dispatch<React.SetStateAction<breadcrumbsProps[]>>;
}

function Friends({
  userId,
  page,
  setPage,
  breadcrumbs,
  setBreadcrumbs,
}: FriendsComponentProps) {
  //
  const [data, setData] = useState<UsersProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useScrollTrigger(
    `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}/friends/${page}/20`,
    data,
    setData,
    setIsLoading,
    isLoading,
    page,
    setPage
  );

  return (
    <FriendsContainer>
      <Breadcrumbs>
        {breadcrumbs.map((breadcrumb, index) => {
          const isLastBreadcrumb = index === breadcrumbs.length - 1;
          return (
            <div key={index}>
              <BreadcrumbsLink to={breadcrumb.to}>
                {breadcrumb.name}
              </BreadcrumbsLink>
              {!isLastBreadcrumb && " > "}
            </div>
          );
        })}
      </Breadcrumbs>
      <FriendsTitle>Friends:</FriendsTitle>
      <Container>
        {data.map((friend) => {
          return (
            <User
              key={friend.id}
              user={friend}
              breadcrumbs={breadcrumbs}
              setBreadcrumbs={setBreadcrumbs}
            />
          );
        })}
        {isLoading ? <Loading /> : null}
      </Container>
    </FriendsContainer>
  );
}

export default Friends;

const FriendsContainer = styled.div``;

const Breadcrumbs = styled.div`
  padding: 20px;
  display: flex;
  column-gap: 6px;
  flex-wrap: wrap;
  row-gap: 7px;
`;

const BreadcrumbsLink = styled(Link)``;

const FriendsTitle = styled.h2`
  margin-left: 10px;
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0px 20px 10px;
`;
