import { Img } from "../Img";
import { Text } from "../Text";
import more from '../../assets/images/more.png'




export const userListColumns = [
  {
    Header: "SN",
    accessor: "sn",
    Cell: ({ cell: { value } }) => (
      <Text
        className="text-[14px] text-blue_gray-900 p-3"
        size="txtOpenSansRomanBold12Gray600"
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
        className="text-[14px] text-blue_gray-900 p-3"
        size="txtOpenSansRomanBold16Gray600"
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
        className="capitalize text-[14px] text-black-900"
        size="txtOpenSansRomanBold16Gray600"
      >
        {value}
      </Text>
    ),
  },
  {
    Header: "Date",
    accessor: "signupdate",
    Cell: ({ cell: { value } }) => (
      <Text
        className="capitalize  leading-[24.00px]  text-[14px] text-black-900  w-full"
        size="txtOpenSansRomanBold16Gray600"
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
        className="capitalize  text-[14px] text-gray-800"
        size="txtOpenSansRomanBold16Gray600"
      >
        {value}
      </Text>
    ),
  },
  {
    Header: "Phone no.",
    accessor: "phonenumber",
    Cell: ({ cell: { value } }) => (
      <Text
        className="capitalize  text-[14px] text-gray-800"
        size="txtOpenSansRomanBold16Gray600"
      >
        {value}
      </Text>
    ),
  },
  {
    Header: "Email",
    accessor: "email",
    Cell: ({ cell: { value } }) => (
      <Text
        className="capitalize  text-[14px] text-gray-800"
        size="txtOpenSansRomanBold16Gray600"
      >
        {value}
      </Text>
    ),
  },
  {
    Header: "Mode",
    accessor: "mode",
    Cell: ({ cell: { value } }) => (
      <div className="flex justify-between">
        <Text
          className="capitalize  text-[15px] text-green-800"
          size="txtOpenSansRomanBold16Gray600"
        >
          {value}
        </Text>
        <div className="flex justify-evenly w-[70%]">
          <Img
            className="w-5 h-5 mr-1"
            src="/images/img_link_gray_600.svg"
            alt="link"
          />
          <Img
            className="w-5  object-contain h-5 mr-1"
            alt="overflowmenu"
            src={more} // assuming that the value contains the image src
          />
        </div>
      </div>
    ),
  },
];

export const userOrderColumns  =  [
  {
      Header: 'SN',
      accessor: 'sn',
      Cell: ({ value }) => (
          <Text className="capitalize pb-[15px] pl-4 pt-[34px] text-gray-600 text-xs" size="txtOpenSansRomanBold12Gray600">
              {value}
          </Text>
      )
  },
  {
      Header: 'ID',
      accessor: 'id',
      Cell: ({ value }) => (
          <Text className="capitalize pb-[15px] pt-[33px] text-[13px] text-gray-600" size="txtOpenSansRomanBold13">
              {value}
          </Text>
      )
  },
  {
      Header: 'Vendor',
      accessor: 'vendorOne',
      Cell: ({ value }) => (
          <Text className="capitalize pb-3.5 pt-[31px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
              {value}
          </Text>
      )
  },
  {
      Header: 'Customer',
      accessor: 'customer',
      Cell: ({ value }) => (
          <Text className="capitalize pb-3.5 pt-[31px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
              {value}
          </Text>
      )
  },
  {
      Header: 'Mode',
      accessor: 'mode',
      Cell: ({ value }) => (
          <Text className="capitalize pb-3.5 pt-[31px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
              {value}
          </Text>
      )
  },
  {
      Header: 'Address',
      accessor: 'address',
      Cell: ({ value }) => (
          <Text className="capitalize pb-3.5 pt-8 text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
              {value}
          </Text>
      )
  },
  {
      Header: 'Item',
      accessor: 'item',
      Cell: ({ value }) => (
          <Text className="capitalize pb-[15px] pl-[13px] pt-[31px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
              {value}
          </Text>
      )
  },
  {
      Header: 'Order',
      accessor: 'order',
      Cell: ({ value }) => (
          <Text className="capitalize pb-3.5 pt-8 text-green-A700 text-sm" size="txtOpenSansRomanBold14GreenA700">
              {value}
          </Text>
      )
  },
  {
      Header: 'Phone Number',
      accessor: 'phonenumber',
      Cell: ({ value }) => (
          <Text className="capitalize pb-[15px] pt-[31px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
              {value}
          </Text>
      )
  },
  {
      Header: 'Language',
      accessor: 'language',
      Cell: ({ value }) => (
          <Text className="capitalize pb-3.5 pt-8 text-green-A700 text-sm" size="txtOpenSansRomanBold14GreenA700">
              {value}
          </Text>
      )
  },
  {
      Header: 'Date',
      accessor: 'date',
      Cell: ({ value }) => (
          <Text className="capitalize pb-[15px] pt-[31px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
              {value}
          </Text>
      )
  },
  {
      Header: 'Time',
      accessor: 'time',
      Cell: ({ value }) => (
          <Text className="capitalize pb-[17px] pt-[29px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
              {value}
          </Text>
      )
  },
  {
      Header: 'Receipt',
      accessor: 'reciept',
      Cell: ({ value }) => (
          <Text className="capitalize pb-4 pt-[29px] text-gray-600 text-sm" size="txtOpenSansRomanRegular14Gray600">
              {value}
          </Text>
      )
  }
]

export const userTransactionColumns =  [
  {
      Header: 'SN',
      accessor: 'sn',
      Cell: ({ value }) => (
          <Text className="capitalize pb-[18px] pl-2.5 pt-7 text-gray-600 text-xs" size="txtOpenSansRomanRegular12">
              {value}
          </Text>
      )
  },
  {
      Header: 'ID',
      accessor: 'id',
      Cell: ({ value }) => (
          <Text className="capitalize pb-[18px] pt-[27px] text-[13px] text-gray-600" size="txtOpenSansRomanBold13">
              {value}
          </Text>
      )
  },
  {
      Header: 'Vendor',
      accessor: 'vendorOne',
      Cell: ({ value }) => (
          <Text className="capitalize pb-[18px] pt-[25px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
              {value}
          </Text>
      )
  },
  {
      Header: 'Customer',
      accessor: 'customer',
      Cell: ({ value }) => (
          <Text className="capitalize pb-[18px] pt-[25px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
              {value}
          </Text>
      )
  },
  {
      Header: 'Address',
      accessor: 'address',
      Cell: ({ value }) => (
          <Text className="capitalize pb-[18px] pt-[26px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
              {value}
          </Text>
      )
  },
  {
      Header: 'Item',
      accessor: 'item',
      Cell: ({ value }) => (
          <Text className="capitalize pb-[17px] pl-2 pt-[26px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
              {value}
          </Text>
      )
  },
  {
      Header: 'Order Price',
      accessor: 'orderprice',
      Cell: ({ value }) => (
          <Text className="capitalize pb-[17px] pt-[26px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
              {value}
          </Text>
      )
  },
  {
      Header: 'Delivery',
      accessor: 'deliveryprice',
      Cell: ({ value }) => (
          <Text className="capitalize pb-[18px] pl-2.5 pt-[26px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
              {value}
          </Text>
      )
  },
  {
      Header: 'Time Received',
      accessor: 'language',
      Cell: ({ value }) => (
          <Text className="capitalize pb-5 pl-1.5 pt-6 text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
              {value}
          </Text>
      )
  },
  {
      Header: 'Time Completed',
      accessor: 'timecompleted',
      Cell: ({ value }) => (
          <Text className="capitalize pb-5 pl-2 pt-6 text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
              {value}
          </Text>
      )
  },
  {
      Header: 'Status',
      accessor: 'languageOne',
      Cell: ({ value }) => (
          <Text className="capitalize pb-4 pt-[27px] text-green-A700 text-sm" size="txtOpenSansRomanBold14GreenA700">
              {value}
          </Text>
      )
  },
  {
      Header: 'Date',
      accessor: 'date',
      Cell: ({ value }) => (
          <Text className="capitalize pb-[18px] pt-[26px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
              {value}
          </Text>
      )
  },
  {
      Header: 'Action',
      accessor: 'action',
      Cell: ({ value }) => (
          <a href="javascript:" className="capitalize pb-5 pl-1 pt-[29px] text-[10px] text-red-700">
              <Text size="txtOpenSansRomanRegular10Red700">{value}</Text>
          </a>
      )
  },
]