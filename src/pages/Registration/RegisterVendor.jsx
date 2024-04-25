import React from "react";
import {tableColumnVendor} from "../../components/TableData/RegisterColumns"
import { ReactTable } from "../../components";
// import { createColumnHelper } from "@tanstack/react-table";
// import { useSearchContext } from "contextApi/SearchContext";



const RegisterVendor = () => {
  const TableData = React.useMemo(()=> [
    {
      brandname: "Osere Denco",
      address: "22 old aba road , market junction......",
      contact: "08109830911",
      status: "Active",
    },
    {
      brandname: "genesis",
      address: "rumuola road off aba xpress way",
      contact: "090155900132",
      status: "Active",
    },
    {
      brandname: "kilimanjaro",
      address: "woji estate off alcon road elijiji",
      contact: "08030679668",
      status: "Active",
    },
    {
      brandname: "republic",
      address: "22 old aba road , market junction......",
      contact: "08039680942",
      status: "Active",
    },
    {
      brandname: "Osere Denco",
      address: "22 old aba road , market junction......",
      contact: "08109830911",
      status: "Active",
    },
    {
      brandname: "genesis",
      address: "rumuola road off aba xpress way",
      contact: "090155900132",
      status: "Active",
    },
    {
      brandname: "kilimanjaro",
      address: "woji estate off alcon road elijiji",
      contact: "08030679668",
      status: "Active",
    },
    {
      brandname: "republic",
      address: "22 old aba road , market junction......",
      contact: "08039680942",
      status: "Active",
    },
    {
      brandname: "Osere Denco",
      address: "22 old aba road , market junction......",
      contact: "08109830911",
      status: "Active",
    },
    {
      brandname: "genesis",
      address: "rumuola road off aba xpress way",
      contact: "090155900132",
      status: "Active",
    },
    {
      brandname: "kilimanjaro",
      address: "woji estate off alcon road elijiji",
      contact: "08030679668",
      status: "Active",
    },
    {
      brandname: "republic",
      address: "22 old aba road , market junction......",
      contact: "08039680942",
      status: "Active",
    },
    {
      brandname: "Osere Denco",
      address: "22 old aba road , market junction......",
      contact: "08109830911",
      status: "Active",
    },
    {
      brandname: "genesis",
      address: "rumuola road off aba xpress way",
      contact: "090155900132",
      status: "Active",
    },
    {
      brandname: "kilimanjaro",
      address: "woji estate off alcon road elijiji",
      contact: "08030679668",
      status: "Active",
    },
    {
      brandname: "republic",
      address: "22 old aba road , market junction......",
      contact: "08039680942",
      status: "Active",
    },
  ],[])

  // const data = useMemo(()=> TableData,[])
  //Global Table Search
  // const [filteredData, setFilteredData] = React.useState(TableData);

  // const {searchInput} =  useSearchContext()

  // React.useEffect(() => {
  //   setFilteredData(
  //     TableData.filter((item) =>
  //       item.brandname.toLowerCase().includes(searchInput.toLowerCase())
  //     )
  //   );
  // }, [searchInput]);
  
  const COLUMNS = React.useMemo(() => tableColumnVendor,[])
  return (
    <>
      <div className="reg-table">
        <ReactTable
          columns={COLUMNS}
          data={TableData}
          rowClass={" py-4 shadow-gray-400 rounded-xl h-[3rem] bg-red"}
          headerClass={"bg-[transparent] border-solid border-[1px]  border-[#C2C0C0]  rounded-xl mb-3"}
          rowDataClass={""}
        />
      </div>
    </>
  );
};

export default RegisterVendor;
