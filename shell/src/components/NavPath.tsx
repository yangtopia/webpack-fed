import React from 'react';
import {Breadcrumb} from "antd";

interface Props {
  paths: string[];
}

const NavPath: React.VFC<Props> = ({paths}) => {
  return (
    <Breadcrumb style={{margin: '16px 0'}}>
      {paths.map(path => (
        <Breadcrumb.Item key={path}>{path}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}

export default NavPath;
