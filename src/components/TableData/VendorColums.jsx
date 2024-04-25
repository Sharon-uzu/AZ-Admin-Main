import { Img } from "../Img";
import { Text } from "../Text";

export const vendorListColumn = [
  {
    Header: "S/N",
    accessor: "id",
    Cell: ({ cell: { value } }) => (
      <Text
        className="text-[14px] text-blue_gray-900 ml-4"
        size="txtOpenSansRegular19"
      >
        {value}
      </Text>
    ),
  },
  {
    Header: "ID",
    accessor: "code",
    Cell: ({ cell: { value } }) => (
      <Text
        className="text-[14px] text-blue_gray-900"
        size="txtOpenSansRegular19"
      >
        {value}
      </Text>
    ),
  },
  {
    Header: "Logo",
    // Assuming logo is a property of the data
    // If it's always the same, you could just render it directly in the Cell
    accessor: "logo",
    Cell: ({ cell: { value } }) => (
      <Img
        className="h-[50px] lg:h-auto ml-4 lg:ml-[0] lg:mt-0 my-[9px] rounded-[50%] w-[50px]"
        src={value}
        alt="ellipseSixteen"
      >
      </Img>
    ),
  },
  {
    Header: "Name",
    accessor: "name",
    Cell: ({ cell: { value } }) => (
      <Text
        className="capitalize text-[14px] text-black-900"
        size="txtOpenSansRomanBold19"
      >
        {value}
      </Text>
    ),
  },
  {
    Header: "Location",
    accessor: "address",
    Cell: ({ cell: { value } }) => (
      <Text
        className="capitalize  leading-[24.00px]  text-[14px] text-black-900"
        size="txtOpenSansRegular19Black900"
      >
        {value}
      </Text>
    ),
  },
  {
    Header: "Phone No.",
    accessor: "phone",
    Cell: ({ cell: { value } }) => (
      <Text
        className="capitalize  text-[14px] text-gray-800"
        size="txtOpenSansRegular13"
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
        className="capitalize  text-[14px] text-green-800"
        size="txtOpenSansRegular19Green800"
      >
        {value}
      </Text>
    ),
  },
  {
    Header: "Action",
    accessor: "passwordAction",
    Cell: ({ cell: { value } }) => (
      <Text
        className="capitalize leading-[24.00px] text-[14px] text-gray-600 "
        size="txtOpenSansRegular19Gray600"
      >
        {value}
      </Text>
    ),
  },
  {
    Header: "Mode",
    accessor: "enableAction",
    Cell: ({ cell: { value } }) => (
      <Text
        className="capitalize  text-gray-800"
        size="txtOpenSansRegular13"
      >
        {value}
      </Text>
    ),
  },
];

// Vendor Activity Column
export const vendorActivityColumn = [
    {
        Header: "S/N",
        accessor: "sn",
      Cell: ({ cell: { value } }) => (
        <Text
        className="text-[14px] text-blue_gray-900 ml-4"
          size="txtOpenSansRomanBold14"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: "Date",
      accessor: "date",
      Cell: ({ cell: { value } }) => (
        <Text
        className="text-[14px] text-blue_gray-900"
          size="txtOpenSansRomanBold14"
        >
          {value}
        </Text>
      ),
    },
    {
        Header: "ID",
        accessor: "id",
      Cell: ({ cell: { value } }) => (
        <Text
        className="text-[14px] text-blue_gray-900"
          size="txtOpenSansRomanBold16Gray10001"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: "Name",
      accessor: "name",
      Cell: ({ cell: { value } }) => (
        <Text
        className="text-[14px] text-blue_gray-900"
          size="txtOpenSansRomanBold16Gray10001"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: "Address",
      accessor: "address",
      Cell: ({ cell: { value } }) => (
        <Text
        className="text-[14px] text-blue_gray-900"
          size="txtOpenSansRomanBold16Gray10001"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: "Phone No.",
      accessor: "phoneNo",
      Cell: ({ cell: { value } }) => (
        <Text
        className="text-[14px] text-blue_gray-900"
          size="txtOpenSansRomanBold14"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: "Payment Status",
      accessor: "paymentStatus",
      Cell: ({ cell: { value } }) => (
        <Text
          className="text-[14px] text-blue_gray-900"
          size="txtOpenSansRomanBold14"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: "Order Status",
      accessor: "orderStatus",
      Cell: ({ cell: { value } }) => (
        <Text
          className="text-[14px] text-blue_gray-900"
          size="txtOpenSansRomanBold14"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: "Customer Responds",
      accessor: "customerResponds",
      Cell: ({ cell: { value } }) => (
        <Text
          className="capitalize leading-[24.00px] text-center  text-blue_gray-900 text-[14px]"
          size="txtOpenSansRomanBold14"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: "Delivery Status",
      accessor: "deliveryStatus",
      Cell: ({ cell: { value } }) => (
        <Text
          className="capitalize leading-[24.00px] text-blue_gray-900 text-[14px]"
          size="txtOpenSansRomanBold14"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: "Rider",
      accessor: "rider",
      Cell: ({ cell: { value } }) => (
        <Text
          className="capitalize  text-blue_gray-900 text-[14px]"
          size="txtOpenSansRomanBold14"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: "Order NO",
      accessor: "orderNo",
      Cell: ({ cell: { value } }) => (
        <Text
          className="capitalize  text-blue_gray-900 text-[14px]"
          size="txtOpenSansRomanBold14"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: "Time",
      accessor: "time",
      Cell: ({ cell: { value } }) => (
        <Text
          className="capitalize  text-blue_gray-900 text-[14px]"
          size="txtOpenSansRomanBold14"
        >
          {value}
        </Text>
      ),
    },
  ];
  
  // Vendor Transaction Column 

export const vendorTransactionColumn = [
    {
      Header: "S/N",
      accessor: "sn",
      Cell: ({ cell: { value } }) => (
        <Text
          className="text-[14px] text-blue_gray-900 ml-4"
          size="txtOpenSansRomanBold14"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: "Date",
      accessor: "date",
      Cell: ({ cell: { value } }) => (
        <Text
          className="text-[14px] text-blue_gray-900"
          size="txtOpenSansRomanBold14"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: "ID",
      accessor: "id",
      Cell: ({ cell: { value } }) => (
        <Text
          className="text-[14px] text-blue_gray-900"
          size="txtOpenSansRomanBold16Gray10001"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: "Name",
      accessor: "name",
      Cell: ({ cell: { value } }) => (
        <Text
          className="text-[14px] text-blue_gray-900"
          size="txtOpenSansRomanBold16Gray10001"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: "Address",
      accessor: "address",
      Cell: ({ cell: { value } }) => (
        <Text
          className="text-[14px] text-blue_gray-900"
          size="txtOpenSansRomanBold16Gray10001"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: "Phone",
      accessor: "phoneNo",
      Cell: ({ cell: { value } }) => (
        <Text
          className="text-[14px] text-blue_gray-900"
          size="txtOpenSansRomanBold14"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: "Order Price",
      accessor: "orderPrice",
      Cell: ({ cell: { value } }) => (
        <Text
          className="text-[14px] text-blue_gray-900 leading-[24.00px]"
          size="txtOpenSansRomanBold14"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: "Delivery Price",
      accessor: "deliveryPrice",
      Cell: ({ cell: { value } }) => (
        <Text
          className="text-[14px] text-blue_gray-900 leading-[24.00px]"
          size="txtOpenSansRomanBold14"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: "Discount",
      accessor: "discount",
      Cell: ({ cell: { value } }) => (
        <Text
          className="text-[14px] text-blue_gray-900 leading-[24.00px]"
          size="txtOpenSansRomanBold14"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: "Receipt",
      accessor: "receipt",
      Cell: ({ cell: { value } }) => (
        <Text
          className="text-[14px] text-blue_gray-900 leading-[24.00px]"
          size="txtOpenSansRomanBold14"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: "Payment Mode",
      accessor: "paymentMode",
      Cell: ({ cell: { value } }) => (
        <Text
          className="text-[14px] text-blue_gray-900 leading-[24.00px]"
          size="txtOpenSansRomanBold14"
        >
          {value}
        </Text>
      ),
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: ({ cell: { value } }) => (
        <Text
          className="text-[14px] text-blue_gray-900 leading-[24.00px]"
          size="txtOpenSansRomanBold14"
        >
          {value}
        </Text>
      ),
    },
  ];
  