import React, { useEffect, useState } from "react";
import { GET_TEMPLATES } from "../../../constants";
import { Table } from "antd";
import { columns } from '../constants';

const allTemplates = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch(GET_TEMPLATES)
      .then((res) => res.json())
      .then((json) => setTemplates(json.templates || []));
  }, []);



  return (
    <div>
      <br/>
      <Table dataSource={templates} columns={columns} />
    </div>
  );
};

export default allTemplates;
