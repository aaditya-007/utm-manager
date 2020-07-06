import React, { useEffect, useState } from "react";

const AllLinks = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch("/links")
      .then((res) => res.json)
      .then((json) => console.log(json));
  });

  return <div>All Links</div>;
};

export default AllLinks;
