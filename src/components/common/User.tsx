import { Link } from "react-router-dom";
import styled from "styled-components";

// import interfaces
import { breadcrumbsProps } from "../../App";

// import interfaces
import { UsersProps } from "../../dashboard/Users/Users";

interface UserProps {
  user: UsersProps;
  breadcrumbs: breadcrumbsProps[];
  setBreadcrumbs: React.Dispatch<React.SetStateAction<breadcrumbsProps[]>>;
}

function User({ user, breadcrumbs, setBreadcrumbs }: UserProps) {
  //
  const { id, imageUrl, lastName, name, prefix, title } = user;

  const handleClick = () => {
    const { id, prefix, name, lastName } = user;
    setBreadcrumbs([
      ...breadcrumbs,
      {
        name: `${prefix} ${name} ${lastName}`,
        to: `/user/${id}`,
      },
    ]);
  };

  return (
    <CardLink to={`/user/${id}`} onClick={handleClick}>
      <Card>
        <CardContent>
          <Image src={`${imageUrl}?id=${id}`} alt={name + " " + lastName} />
          <DescriptionBox>
            <FullName>{prefix + " " + name + " " + lastName}</FullName>
            <Title>{title}</Title>
          </DescriptionBox>
        </CardContent>
      </Card>
    </CardLink>
  );
}

export default User;

const CardLink = styled(Link)`
  width: 50%;
  @media screen and (min-width: 1000px) {
    width: 25%;
  }
  color: black;
  text-decoration: none;
`;

const Card = styled.div`
  width: 100%;
`;

const CardContent = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const DescriptionBox = styled.div`
  width: 100%;
  word-wrap: break-word;
`;

const FullName = styled.h2`
  padding: 2px 10px;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
`;

const Title = styled.p`
  padding: 2px 10px;
  font-size: 16px;
  line-height: 20px;
`;

const LoadingContainer = styled.div``;
