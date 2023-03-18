import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// import component
import { UserDetailsPanel, AddressInfo, Connections } from "../../components";
// import interface
import { breadcrumbsProps } from "../../App";
// import asset
import loading from "../../assets/loading.gif";

export interface UniqueUsearProps {
  id: number;
  name: string;
  lastName: string;
  prefix: string;
  title: string;
  jobDescriptor: string;
  jobArea: string;
  jobType: string;
  email: string;
  ip: string;
  imageUrl: string;
  company: {
    name: string;
    suffix: string;
  };
  address: {
    zipCode: string;
    city: string;
    streetAddress: string;
    country: string;
    state: string;
  };
}

interface UniqueUserComponentProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setBreadcrumbs: React.Dispatch<React.SetStateAction<breadcrumbsProps[]>>;
  breadcrumbs: breadcrumbsProps[];
}

function UniqueUser({
  page,
  setPage,
  breadcrumbs,
  setBreadcrumbs,
}: UniqueUserComponentProps) {
  //
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UniqueUsearProps | null>(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${params.userId}`
      )
      .then((resp) => {
        setUser(resp.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.userId]);

  if (isLoading || !user) {
    // Check if `user` is null before rendering
    return (
      <LoadingContainer>
        <LoadingGif src={loading} alt="loading" />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <Header>
        <ImageBox>
          <Image src={`${user.imageUrl}?id=${params.userId}`} alt="user" />
        </ImageBox>
        {/* UserDetailsPanel Component */}
        <UserDetailsPanel user={user} />
        {/* AddressInfo Component */}
        <AddressInfo user={user} />
      </Header>
      {/* Connections Component */}
      <Connections
        userId={params.userId}
        page={page}
        setPage={setPage}
        breadcrumbs={breadcrumbs}
        setBreadcrumbs={setBreadcrumbs}
      />
    </Container>
  );
}

export default UniqueUser;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  border: 1px solid #ccc;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: unset;
  padding: 20px;

  @media screen and (min-width: 990px) {
    flex-direction: row;
    align-items: center;
  }
`;

// image box styles
const ImageBox = styled.div`
  width: 100%;
  @media screen and (min-width: 990px) {
    width: auto;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  @media screen and (min-width: 990px) {
    width: auto;
  }
`;

const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingGif = styled.img``;
