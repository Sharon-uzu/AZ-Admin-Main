import { Text } from "../Text";

export const tableColumnVendor = [
  // value.accessor("brandname",
  {
    Cell: ({ cell: { value } }) => (
      <Text
        className={` capitalize sm:pl-5  text-[17px] py-4 text-black-900`}
        size="txtOpenSansRomanBold19"
      >
        {value}
      </Text>
    ),
    Header: () => (
      <Text
        className="table-header text-blue_gray-900"
        size="txtOpenSansRegular19"
      >
        Brand Name
      </Text>
    ),
    accessor: "brandname",
  },
  // value.accessor("address",
  {
    Cell: ({ cell: { value } }) => (
      <Text
        className={` capitalize  text-[14px] text-black-900`}
        size="txtOpenSansRegular19Black900"
      >
        {value}
      </Text>
    ),
    Header: () => (
      <Text
        className="table-header text-blue_gray-900"
        size="txtOpenSansRegular19"
      >
        address
      </Text>
    ),
    accessor: "address",
  },
  // value.accessor("contact",
  {
    Cell: ({ cell: { value } }) => (
      <Text
        className={`capitalize text-[14px] text-black-900`}
        size="txtOpenSansRegular19Black900"
      >
        {value}
      </Text>
    ),
    Header: () => (
      <Text
        className="table-header text-blue_gray-900"
        size="txtOpenSansRegular19"
      >
        Contact
      </Text>
    ),
    accessor: "contact",
  },
  // value.accessor("status",
  {
    Cell: ({ cell: { value } }) => (
      <div className="flex flex-row gap-[95px] items-center justify-start p-0.5">
        <Text
          className={` capitalize text-[13px] text-green-800`}
          size="txtOpenSansRegular13"
        >
          {value}
        </Text>
        <Text
          className={` capitalize text-[14px] text-gray-800 `}
          size="txtOpenSansRegular19Green800"
        >
          view
        </Text>
      </div>
    ),
    Header: () => (
      <Text
        className="table-header text-blue_gray-900"
        size="txtOpenSansRegular19"
      >
        Status
      </Text>
    ),
    accessor: "status",
  },
];

export const tableColumnRider = [
  {
    Cell: ({ cell: { value } }) => (
      <Text
        className="capitalize sm:pl-5 pl-7  text-[14px] text-black-900"
        size="txtOpenSansRomanBold19"
      >
        {value}
      </Text>
    ),
    Header: () => (
      <Text
        className="table-header text-blue_gray-900"
        size="txtOpenSansRegular19"
      >
        Name
      </Text>
    ),
    accessor: "name",
  },
  {
    Cell: ({ cell: { value } }) => (
      <Text
        className="capitalize  text-[14px] text-black-900"
        size="txtOpenSansRegular19Black900"
      >
        {value}
      </Text>
    ),
    Header: () => (
      <Text
        className="table-header text-blue_gray-900"
        size="txtOpenSansRegular19"
      >
        address
      </Text>
    ),
    accessor: "address",
  },
  {
    Cell: ({ cell: { value } }) => (
      <Text
        className="capitalize text-[14px] text-black-900"
        size="txtOpenSansRegular19Black900"
      >
        {value}
      </Text>
    ),
    Header: () => (
      <Text
        className="table-header text-blue_gray-900"
        size="txtOpenSansRegular19"
      >
        bike no
      </Text>
    ),
    accessor: "bikeno",
  },
  {
    Cell: ({ cell: { value } }) => (
      <div className="flex flex-row gap-[95px] items-center justify-start p-0.5">
        <Text
          className="capitalize text-[14px] text-green-800"
          size="txtOpenSansRegular19Green800"
        >
          active
        </Text>
        <Text
          className="capitalize text-[13px] text-gray-800"
          size="txtOpenSansRegular13"
        >
          {value}
        </Text>
      </div>
    ),
    Header: () => (
      <Text
        className="table-header text-blue_gray-900"
        size="txtOpenSansRegular19"
      >
        Status
      </Text>
    ),
    accessor: "status",
  },
];

export const tableColumnUser = [
  {
    Cell: ({ cell: { value } }) => (
      <Text
        className="capitalize sm:pl-5 pl-7  text-[14px] text-black-900"
        size="txtOpenSansRomanBold19"
      >
        {value}
      </Text>
    ),
    Header: () => (
      <Text
        className="table-header text-blue_gray-900"
        size="txtOpenSansRegular19"
      >
        Name
      </Text>
    ),
    accessor: "name",
  },
  {
    Cell: ({ cell: { value } }) => (
      <Text
        className="capitalize  text-[14px] text-black-900"
        size="txtOpenSansRegular19Black900"
      >
        {value}
      </Text>
    ),
    Header: () => (
      <Text
        className="table-header text-blue_gray-900"
        size="txtOpenSansRegular19"
      >
        address
      </Text>
    ),
    accessor: "address",
  },
  {
    Cell: ({ cell: { value } }) => (
      <Text
        className="capitalize text-[14px] text-black-900"
        size="txtOpenSansRegular19Black900"
      >
        {value}
      </Text>
    ),
    Header: () => (
      <Text
        className="table-header text-blue_gray-900"
        size="txtOpenSansRegular19"
      >
        Contact
      </Text>
    ),
    accessor: "contact",
  },
  {
    Cell: ({ cell: { value } }) => (
      <div className="flex flex-row gap-[95px] items-center justify-start p-0.5">
        <Text
          className="capitalize text-[14px] text-green-800"
          size="txtOpenSansRegular19Green800"
        >
          active
        </Text>
        <Text
          className="capitalize text-[13px] text-gray-800"
          size="txtOpenSansRegular13"
        >
          {value}
        </Text>
      </div>
    ),
    Header: () => (
      <Text
        className="table-header text-blue_gray-900"
        size="txtOpenSansRegular19"
      >
        Status
      </Text>
    ),
    accessor: "status",
  },
];
