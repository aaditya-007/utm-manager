import React, { useEffect, useState } from "react";
import { GET_LINKS } from "../../../constants";
import { Table } from "antd";
import { columns } from '../constants';

const AllLinks = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch(GET_LINKS)
      .then((res) => res.json())
      .then((json) => setLinks(json.links || []));
  }, []);



  return (
    <div>
      <br/>
      <Table dataSource={links} columns={columns} />
    </div>
  );
};

export default AllLinks;
