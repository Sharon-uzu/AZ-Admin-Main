import React from "react";
import {tableColumnRider} from "../../components/TableData/RegisterColumns"
import { ReactTable} from "../../components";


const RegisterRider = () => {
  const TableData = React.useRef([
    {
      name: "Dennis emma",
      address: "22 old aba road , market junction......",
      bikeno: "we3535",
      status: "view",
    },
    {
      name: "ruth anga",
      address: "rumuola road off aba xpress way",
      bikeno: "we3535",
      status: "view",
    },
    {
      name: "sharon  edu",
      address: "woji estate off alcon road elijiji",
      bikeno: "we3535",
      status: "view",
    },
    {
      name: "kill bill ",
      address: "22 old aba road , market junction......",
      bikeno: "we3535",
      status: "view",
    },
  ]).current
  
  const COLUMNS = React.useMemo(() => tableColumnRider,[])

  return (
    <>
      <div className="reg-table w-[100%] px-2">
        <ReactTable
          columns={COLUMNS}
          data={TableData}
          rowClass={"shadow-md shadow-gray-400 rounded-xl h-[3rem]"}
          headerClass={"bg-gray-100_01 shadow-md"}
          rowDataClass={""}
        />
      </div>
    </>
  );
};

export default RegisterRider;
