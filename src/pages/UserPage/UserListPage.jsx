import React from "react";
import {  ReactTable} from "../../components";
import { userListColumns } from "../../components/TableData/UserColumns";
const UserListPage = () => {

  
  const table6Data = React.useMemo(() => [
    {
      sn: "1",
      id: "A23",
      name: "dennar",
      signupdate: "15/03/22",
      address: "worji",
      phonenumber: "08109830911",
      email: "dennar@gmail.com",
      mode: "active",
    },
    {
      sn: "2",
      id: "VE3",
      name: "sharon",
      signupdate: "15/03/22",
      address: "transamadi",
      phonenumber: "09155900132",
      email: "dennar@gmail.com",
      mode: "inactive",
    },
    {
      sn: "3",
      id: "WS2",
      name: "traecy",
      signupdate: "15/03/22",
      address: "onelga",
      phonenumber: "08030679668",
      email: "dennar@gmail.com",
      mode: "active",
    },
    {
      sn: "4",
      id: "WS2",
      name: "dennis",
      signupdate: "15/03/22",
      address: "Egbema",
      phonenumber: "08109830911",
      email: "dennar@gmail.com",
      mode: "active",
    },
  ],[]);
  const table6Columns = React.useMemo(() => userListColumns, []);


  return (
    <>
    <div className="user-list-table">
        <ReactTable
          columns={table6Columns}
          data={table6Data}
          tableClass={"w-[98%] mx-auto"}
          headerClass={"bg-blue-700_96 w-full h-12 rounded-full  shadow-bs4 text-left"}
          rowClass={"shadow-md shadow-red-100  p-[15px] rounded-2xl  shadow-bs w-full h-14"}
          tableBodyClass={"w-full "}
        />
    </div>
        
    </>
  );
};

export default UserListPage;
