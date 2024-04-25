import { Img } from "../Img";
import { Text } from "../Text";




export const deliveryFeedColumn = [
    // other columns...
    {
      Header: "ID",
      accessor: "id",
      Cell: ({ cell: { value } }) => (
        <Text className="text-[14px] text-blue_gray-900 p-3" size="txtOpenSansRegular19">
          {value}
        </Text>
      ),
    },
    {
      Header: "Name",
      accessor: "name",
      Cell: ({ cell: { value } }) => (
        <Text className="capitalize text-[14px] text-black-900" size="txtOpenSansRomanBold19">
          {value}
        </Text>
      ),
    },
    {
      Header: "Location",
      accessor: "location",
      Cell: ({ cell: { value } }) => (
        <Text className="capitalize  leading-[24.00px]  text-[14px] text-black-900  w-full" size="txtOpenSansRegular19Black900">
          {value}
        </Text>
      ),
    },
    {
      Header: "Bike Num",
      accessor: "bikenum",
      Cell: ({ cell: { value } }) => (
        <Text className="capitalize  text-[14px] text-gray-800" size="txtOpenSansRegular13">
          {value}
        </Text>
      ),
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ cell: { value } }) => (
        <div className="flex justify-between">
          <Text className="capitalize  text-[15px] text-green-800 " size="txtOpenSansRegular19Green800">
            {value}
          </Text>

          <div className="flex justify-evenly w-[70%]">
            <Img 
                src="https://via.placeholder.com/20" 
                alt="Checked" 
                className="w-5 h-5 mr-1"
            />
            <Img 
                src="https://via.placeholder.com/20" 
                alt="More options" 
                className="w-5 h-5 mr-1"
            />
            <Img 
                src="https://via.placeholder.com/20" 
                alt="Alert" 
                className="w-5 h-5 mr-1"
            />
          </div>
        </div>
      ),
    },
  ];
  