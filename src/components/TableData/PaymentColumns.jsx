import { Img } from "../Img";
import { Text } from "../Text";

export const transactionColumns = [
    {
      Header: 'Role',
      accessor: 'role',
      Cell: ({ value }) => (
        <Text className="capitalize pb-[18px] pl-2.5 pt-7 text-gray-800 text-sm " size="txtOpenSansRomanRegular12">
          {value}
        </Text>
      ),
    },
    {
      Header: 'Invoice',
      accessor: 'idInvoice',
      Cell: ({ value }) => (
        <Text className="capitalize pb-[18px] pt-[27px] text-[13px] text-gray-600" size="txtOpenSansRomanBold13">
          {value}
        </Text>
      ),
    },
    {
      Header: 'Date',
      accessor: 'date',
      Cell: ({ value }) => (
        <Text className="capitalize pb-[18px] pt-[25px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
          {value}
        </Text>
      ),
    },
    {
      Header: 'Recipient',
      accessor: 'recipient',
      Cell: ({ value }) => (
        <Text className="capitalize pb-[18px] pt-[25px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
          {value}
        </Text>
      ),
    },
    {
      Header: 'Email',
      accessor: 'email',
      Cell: ({ value }) => (
        <Text className="capitalize pb-[18px] pt-[26px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
          {value}
        </Text>
      ),
    },
    {
      Header: 'Transaction',
      accessor: 'transactionType',
      Cell: ({ value }) => (
        <Text className="capitalize pb-[17px] pl-2 pt-[26px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
          {value}
        </Text>
      ),
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: ({ value }) => (
        <Text className="capitalize pb-[17px] pt-[26px] text-gray-600 text-sm  " size="txtOpenSansRomanBold14Gray600">
          {value}
        </Text>
      ),
    },
    {
      Header: 'Comment',
      accessor: 'comment',
      Cell: ({ value }) => (
        <Img src={ value } className=" w-4 h-4  text-sm ml-auto mr-3" size="txtOpenSansRomanBold14Gray600"/>
      ),
    },
  ];
export const vendorTransactionColumns = [
    {
      Header: 'SN',
      accessor: 'sn',
      Cell: ({ value }) => (
        <Text className="capitalize pb-[18px] pl-2.5 pt-7 text-gray-800 text-sm " size="txtOpenSansRomanRegular12">
          {value}
        </Text>
      ),
    },
    {
      Header: 'ID',
      accessor: 'id',
      Cell: ({ value }) => (
        <Text className="capitalize pb-[18px] pt-[27px] text-[13px] text-gray-600" size="txtOpenSansRomanBold13">
          {value}
        </Text>
      ),
    },
    {
      Header: 'Client',
      accessor: 'client',
      Cell: ({ value }) => (
        <Text className="capitalize pb-[18px] pt-[25px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
          {value}
        </Text>
      ),
    },
    {
      Header: 'Date',
      accessor: 'paymentDate',
      Cell: ({ value }) => (
        <Text className="capitalize pb-[18px] pt-[25px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
          {value}
        </Text>
      ),
    },
    {
      Header: 'Expected Date',
      accessor: 'expectedDate',
      Cell: ({ value }) => (
        <Text className="capitalize pb-[18px] pt-[26px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
          {value}
        </Text>
      ),
    },
    {
      Header: 'Vendor',
      accessor: 'vendor',
      Cell: ({ value }) => (
        <Text className="capitalize pb-[17px] pt-[26px] text-gray-600 text-sm  " size="txtOpenSansRomanBold14Gray600">
          {value}
        </Text>
      ),
    },
    {
      Header: 'Delivery',
      accessor: 'delivery',
      Cell: ({ value }) => (
        <Text className="capitalize pb-[17px] pt-[26px] text-gray-600 text-sm  " size="txtOpenSansRomanBold14Gray600">
          {value}
        </Text>
      ),
    },
    {
      Header: 'Total Amount',
      accessor: 'amountToPay',
      Cell: ({ value }) => (
        <Text className="capitalize pb-[17px] pt-[26px] text-gray-600 text-sm  " size="txtOpenSansRomanBold14Gray600">
          {value}
        </Text>
      ),
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: ({ value }) => (
        <Text className="capitalize pb-[17px] pt-[26px] text-gray-600 text-sm  " size="txtOpenSansRomanBold14Gray600">
          {value}
        </Text>
      ),
    },
    {
      Header: 'Receipt',
      accessor: 'receipt',
      Cell: ({ value }) => (
        <div className="flex justify-around">
        <Text className="capitalize  text-gray-600 text-sm w-[50%]" size="txtOpenSansRomanBold14Gray600">
          view
        </Text>
        <Img src={value} className=" w-4 h-4  text-sm" size="txtOpenSansRomanBold14Gray600"/>
        </div>
      ),
    },
  ];
export const riderPaymentColumns = [
    {
      Header: 'S/N',
      accessor: 'S/N',
      Cell: ({ value }) => (
        <Text className="capitalize pb-[18px] pl-2.5 pt-7 text-gray-800 text-sm " size="txtOpenSansRomanRegular12">
          {value}
        </Text>
      )
    },
    {
      Header: 'Name',
      accessor: 'name',
      Cell: ({ value }) => (
        <Text className="capitalize pb-[18px] pt-[27px] text-[13px] text-gray-600" size="txtOpenSansRomanBold13">
          {value}
        </Text>
      )
    },
    {
      Header: 'Bike no.',
      accessor: 'bike number',
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
        <Text className="capitalize pb-[18px] pt-[25px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
          {value}
        </Text>
      )
    },
    {
      Header: 'Salary',
      accessor: 'salary',
      Cell: ({ value }) => (
        <Text className="capitalize pb-[18px] pt-[26px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
          {value}
        </Text>
      )
    },
    {
      Header: 'Bonus',
      accessor: 'bonus',
      Cell: ({ value }) => (
        <Text className="capitalize pb-[17px] pt-[26px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
          {value}
        </Text>
      )
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: ({ value }) => (
        <Text className="capitalize pb-[17px] pt-[26px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
          {value}
        </Text>
      )
    },
    {
      Header: 'PickUp no',
      accessor: 'pick Up no',
      Cell: ({ value }) => (
        <Text className="capitalize pb-[17px] pt-[26px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
          {value}
        </Text>
      )
    },
    {
      Header: 'Delivery no',
      accessor: 'delivery no',
      Cell: ({ value }) => (
        <Text className="capitalize pb-[17px] pt-[26px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
          {value}
        </Text>
      )
    },
    {
      Header: 'Date',
      accessor: 'date',
      Cell: ({ value }) => (
        <Text className="capitalize pb-[17px] pt-[26px] text-gray-600 text-sm" size="txtOpenSansRomanBold14Gray600">
          {value}
        </Text>
      )
    },
    {
      Header: 'Reciept',
      accessor: 'reciept',
      Cell: ({ value }) => (
        <div className="flex justify-around">
          <Text className="capitalize text-gray-600 text-sm w-[50%]" size="txtOpenSansRomanBold14Gray600">
            view
          </Text>
          <Img src={value} className="w-4 h-4 text-sm" size="txtOpenSansRomanBold14Gray600"/>
        </div>
      )
    }
  ];
  