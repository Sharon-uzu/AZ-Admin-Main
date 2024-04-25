import React from "react";
import { Img, ReactTable, Text } from "../../components";
import { useManagentContext } from "../../contextApi/ManagementContext";
const SuperAdminManager = () => {
  const { userType } = useManagentContext();
  console.log(userType, "user");

  const table4Data = React.useRef([
    {
      name: "ruth amadi",
      language: "active",
      status: "active",
      lastlogindate: "183.4567.776.90",
      loginip: "183.4567.776.90",
      action: "/images/img_overflowmenu.svg",
    },
    {
      name: "genesis@gmail.com",
      language: "deniss jude",
      status: "inactive",
      lastlogindate: "12/11/2023 12:40:30",
      loginip: "183.4567.776.90",
      action: "/images/img_overflowmenu.svg",
    },
    {
      name: "kilimanjaro@gmail.com",
      language: "minia elis",
      status: "active",
      lastlogindate: "12/11/2023 12:40:30",
      loginip: "183.4567.776.90",
      action: "/images/img_overflowmenu.svg",
    },
    {
      name: "dominos@gmail.com",
      language: "devern tur",
      status: "active",
      lastlogindate: "12/11/2023 12:40:30",
      loginip: "183.4567.776.90",
      action: "/images/img_overflowmenu.svg",
    },
  ]);

  const table4Columns = React.useMemo(() => [
      {
        Header: "Name",
        accessor: "name",
        Cell: ({ cell: { value } }) => (
          <div className="flex justify-between items-center w-full pl-4">
            <Img
              src="/images/img_image50.png"
              className="w-10 h-10 rounded-[50%]"
            />
            <Text
              className="capitalize   text-left text-gray-600 w-[70%]"
              size="txtOpenSansRomanBold16Gray600"
            >
              {value}
            </Text>
          </div>
        ),
      },
      {
        Header: "Admin",
        accessor: "language",
        Cell: ({ cell: { value } }) => (
          <Text
            className="capitalize pb-[11px] pt-[25px] text-base text-light_green-500"
            size="txtOpenSansRomanBold16Lightgreen500"
          >
            {value}
          </Text>
        ),
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ cell: { value } }) => (
          <Text
            className="capitalize pb-2.5 pt-[26px] text-base text-gray-600"
            size="txtOpenSansRomanBold16Gray600"
          >
            {value}
          </Text>
        ),
      },
      {
        Header: "Last Login Date",
        accessor: "lastlogindate",
        Cell: ({ cell: { value } }) => (
          <Text
            className="capitalize pl-[-691px] text-base text-gray-600"
            size="txtOpenSansRomanBold16Gray600"
          >
            {value}
          </Text>
        ),
      },
      {
        Header: "Login IP",
        accessor: "loginip",
        Cell: ({ cell: { value } }) => (
          <Text
            className="capitalize pl-[-691px] text-base text-gray-600"
            size="txtOpenSansRomanBold16Gray600"
          >
            {value}
          </Text>
        ),
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: ({ cell: { value } }) => (
          <div className="flex flex-row gap-[33px] items-start justify-start">
            <Img
              className="h-6 mb-[9px] mt-6 w-6"
              src="/images/img_link_gray_600.svg"
              alt="link"
            />
            <Img
              className="h-6 mb-2 mt-[23px] w-6"
              alt="overflowmenu"
              src={value} // assuming that the value contains the image src
            />
          </div>
        ),
      },
    ],[]);

  const table5Columns = React.useMemo(() => [
      {
        Header: "Name",
        accessor: "name",
        Cell: ({ cell: { value } }) => (
          <Text
            className="capitalize   text-left text-gray-600 w-[70%]"
            size="txtOpenSansRomanBold16Gray600"
          >
            {value}
          </Text>
        ),
      },
      {
        Header: "Admin",
        accessor: "language",
        Cell: ({ cell: { value } }) => (
          <Text
            className="capitalize pb-[11px] pt-[25px] text-base text-light_green-500"
            size="txtOpenSansRomanBold16Lightgreen500"
          >
            {value}
          </Text>
        ),
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ cell: { value } }) => (
          <Text
            className="capitalize pb-2.5 pt-[26px] text-base text-gray-600"
            size="txtOpenSansRomanBold16Gray600"
          >
            {value}
          </Text>
        ),
      },
      {
        Header: "Last Login Date",
        accessor: "lastlogindate",
        Cell: ({ cell: { value } }) => (
          <Text
            className="capitalize pl-[-691px] text-base text-gray-600"
            size="txtOpenSansRomanBold16Gray600"
          >
            {value}
          </Text>
        ),
      },
      {
        Header: "Login IP",
        accessor: "loginip",
        Cell: ({ cell: { value } }) => (
          <Text
            className="capitalize pl-[-691px] text-base text-gray-600"
            size="txtOpenSansRomanBold16Gray600"
          >
            {value}
          </Text>
        ),
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: ({ cell: { value } }) => (
          <div className="flex flex-row gap-[33px] items-start justify-start">
            <Img
              className="h-6 mb-[9px] mt-6 w-6"
              src="/images/img_link_gray_600.svg"
              alt="link"
            />
            <Img
              className="h-6 mb-2 mt-[23px] w-6"
              alt="overflowmenu"
              src={value} // assuming that the value contains the image src
            />
          </div>
        ),
      },
    ],[]);
  return (
    <div className="manage-table">
      {userType === "user" && (
        <ReactTable
          columns={table4Columns}
          data={table4Data.current}
          tableClass={"w-[98%] mx-auto mt-6"}
          headerClass={
            "bg-blue-700_96 w-full h-12 rounded-full  shadow-bs4 text-left"
          }
          rowClass={
            "shadow-md shadow-red-100  p-[15px] rounded-2xl  shadow-bs w-full h-14"
          }
          tableBodyClass={"w-full "}
        />
      )}

      {userType === "vendor" && (
        <ReactTable
          columns={table5Columns}
          data={table4Data.current}
          tableClass={"w-[98%] mx-auto mt-6"}
          headerClass={
            "bg-blue-700_96 w-full h-12 rounded-full  shadow-bs4 text-left"
          }
          rowClass={
            "shadow-md shadow-red-100  p-[15px] rounded-2xl  shadow-bs w-full h-14"
          }
          tableBodyClass={"w-full "}
        />
      )}
    </div>
  );
};

export default SuperAdminManager;