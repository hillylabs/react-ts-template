import React, { FC, useEffect } from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../../actions";

interface Props {
  fetchUsers: () => {};
}

const HomePage: FC<Props> = (props: any) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  console.log("Props :>> ", props);

  return <div>Coming soon ....</div>;
};

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData,
});

const mapDispatchProps = {
  fetchUsers,
};

export default connect(mapStateToProps, mapDispatchProps)(HomePage);
