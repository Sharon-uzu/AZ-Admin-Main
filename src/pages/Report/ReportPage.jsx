import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Button, Img, Line, Text } from "../../components";

const ReportPage = () => {

  const data = [
    {
      name: 'Mon',
      Orders: 2400,
    },
    {
      name: 'Tue',
      Orders: 1398,
    },
    {
      name: 'Wens',
      Orders: 9800,
    },
    {
      name: 'Thurs',
      Orders: 3908,
    },
    {
      name: 'Fri',
      Orders: 4800,
    },
    {
      name: 'Sat',
      Orders: 3800,
    },
    {
      name: 'Sun',
      Orders: 4300,
    },
  ];


  return (
    <>


      <div className="grid grid-cols-2 font-manrope  w-[99%] mx-auto min-h-[100vh] place-items-center">
        <Line className="absolute bg-gray-400_02 h-[559px]  justify-center w-px mx-auto" />
        <Line className="absolute bg-gray-400_02 h-px  mt-8 w-full" />
        <div className=" flex flex-col w-[80%] gap-1">
          <Text
            className="capitalize text-2xl md:text-[25px]  text-gray-600"
            size="txtManropeBold36"
          >
            statistics
          </Text>
          <div className=" grid  grid-cols-1 md:grid-cols-2 gap-y-4 w-full  place-items-center">
            <div className="bg-white-A700 flex  flex-col gap-[5px] items-center  py-[.5em] rounded-[17px] shadow-bs7 w-[80%] h-[90%]">
              <Text
                className="capitalize mt-0.5 sm:text-[17.62px] md:text-[19.62px] text-[21.62px] text-gray-600"
                size="txtOpenSansRomanBold2162"
              >
                accepted
              </Text>
              <Button className="bg-red-200_16 capitalize cursor-pointer font-bold h-[87px] py-1 rounded-[43px] shadow-bs8 md:text-2xl text-center text-red-500 px-2 min-w-[87px]">
                17
              </Button>
            </div>
            <div className="bg-white-A700 flex  flex-col gap-[5px] items-center  py-[.5em] rounded-[17px] shadow-bs7 w-[80%] h-[90%]">
              <Text
                className="capitalize mt-0.5 sm:text-[17.62px] md:text-[19.62px] text-[21.62px] text-gray-600"
                size="txtOpenSansRomanBold2162"
              >
                declined
              </Text>
              <Button className="bg-red-200_16 capitalize cursor-pointer font-bold h-[87px] py-1 rounded-[43px] shadow-bs8 md:text-2xl text-center text-red-500 px-2 min-w-[87px]">
                05
              </Button>
            </div>
            <div className="bg-white-A700 flex  flex-col gap-[5px] items-center  py-[.5em] rounded-[17px] shadow-bs7 w-[80%] h-[90%]">
              <Text
                className="capitalize mt-0.5 sm:text-[17.62px] md:text-[19.62px] text-[21.62px] text-gray-600"
                size="txtOpenSansRomanBold2162"
              >
                pending
              </Text>
              <Button className="bg-red-200_16 capitalize cursor-pointer font-bold h-[87px] py-1 rounded-[43px] shadow-bs8 md:text-2xl text-center text-red-500 px-2 min-w-[87px]">
                03
              </Button>
            </div>
            <div className="bg-white-A700 flex  flex-col gap-[5px] items-center  py-[.5em] rounded-[17px] shadow-bs7 w-[80%] h-[90%]">
              <Text
                className="capitalize mt-0.5 sm:text-[17.62px] md:text-[19.62px] text-[21.62px] text-gray-600"
                size="txtOpenSansRomanBold2162"
              >
                total
              </Text>
              <Button className="bg-red-200_16 capitalize cursor-pointer font-bold h-[87px] py-1 rounded-[43px] shadow-bs8 md:text-2xl text-center text-red-500 px-2 min-w-[87px]">
                25
              </Button>
            </div>
          </div>
        </div>
        <div className=" flex flex-col w-[80%] gap-[5px]">
          <Text
            className="capitalize text-2xl md:text-[25px]  text-gray-600"
            size="txtManropeBold36"
          >
            volume
          </Text>
          <div className=" grid  grid-cols-1 md:grid-cols-2 gap-y-4 w-full  place-items-center">
            <div className="bg-white-A700 flex  flex-col gap-[5px] items-center  py-[.5em] rounded-[17px] shadow-bs7 w-[80%] h-[90%]">
              <Text
                className="capitalize mt-0.5 sm:text-[17.62px] md:text-[19.62px] text-[21.62px] text-gray-600"
                size="txtOpenSansRomanBold2162"
              >
                accepted
              </Text>
              <Button className="bg-red-200_16 capitalize cursor-pointer font-bold h-[87px] py-1 rounded-[43px] shadow-bs8 md:text-2xl text-center text-red-500 px-2 min-w-[87px]">
                120k
              </Button>
            </div>
            <div className="bg-white-A700 flex  flex-col gap-[5px] items-center  py-[.5em] rounded-[17px] shadow-bs7 w-[80%] h-[90%]">
              <Text
                className="capitalize mt-0.5 sm:text-[17.62px] md:text-[19.62px] text-[21.62px] text-gray-600"
                size="txtOpenSansRomanBold2162"
              >
                declined
              </Text>
              <Button className="bg-red-200_16 capitalize cursor-pointer font-bold h-[87px] py-1 rounded-[43px] shadow-bs8 md:text-2xl text-center text-red-500 px-2 min-w-[87px]">
                20k
              </Button>
            </div>
            <div className="bg-white-A700 flex  flex-col gap-[5px] items-center  py-[.5em] rounded-[17px] shadow-bs7 w-[80%] h-[90%]">
              <Text
                className="capitalize mt-0.5 sm:text-[17.62px] md:text-[19.62px] text-[21.62px] text-gray-600"
                size="txtOpenSansRomanBold2162"
              >
                pending
              </Text>
              <Button className="bg-red-200_16 capitalize cursor-pointer font-bold h-[87px] py-1 rounded-[43px] shadow-bs8 md:text-2xl text-center text-red-500 px-2 min-w-[87px]">
                14k
              </Button>
            </div>
            <div className="bg-white-A700 flex  flex-col gap-[5px] items-center  py-[.5em] rounded-[17px] shadow-bs7 w-[80%] h-[90%]">
              <Text
                className="capitalize mt-0.5 sm:text-[17.62px] md:text-[19.62px] text-[21.62px] text-gray-600"
                size="txtOpenSansRomanBold2162"
              >
                total
              </Text>
              <Button className="bg-red-200_16 capitalize cursor-pointer font-bold h-[87px] py-1 rounded-[43px] shadow-bs8 md:text-2xl text-center text-red-500 px-2 min-w-[87px]">
                23.5m
              </Button>
            </div>
          </div>
        </div>

        <div className=" flex flex-col  justify-start  w-[90%] h-[80%]">
          <div className="flex flex-row items-start justify-between w-full">
            <Text
              className="capitalize mb-2 text-4xl sm:text-[32px] md:text-[34px] text-gray-600"
              size="txtManropeBold36"
            >
              growth
            </Text>
            <div className="flex flex-row items-start justify-between mt-7 w-[37%]">
              <Text
                className="mt-0.5 text-[19.69px] text-gray-400 text-right"
                size="txtManropeMedium1969"
              >
                Day
              </Text>
              <Text
                className="mt-0.5 text-[19.69px] text-gray-400 text-right"
                size="txtManropeMedium1969Red500cc"
              >
                Week
              </Text>
              <Text
                className="text-[19.69px] text-gray-400 text-right"
                size="txtManropeMedium1969"
              >
                Month
              </Text>
            </div>
          </div>
  
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 10,
                // right: 30,
                // left: 20,
                bottom: 5,
              }}
              barSize={30}
            >
              <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="5 5" />
              <Bar dataKey="Orders" fill="#FF3636" background={{ fill: '#eee' }} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="grid place-items-center relative w-[80%] ">
          <Text
            className="capitalize text-2xl md:text-[25px]  text-gray-600 mr-auto"
            size="txtManropeBold36"
          >
            statistics
          </Text>
          <Img
            className="max-h-[240px]  object-cover w-full"
            src="/images/img_phmap1.png"
            alt="phmapOne"
          />

          <div className="absolute max-h-[240px] inset-x-[0] mx-auto top-[19%] w-[45%]">
            <div className="bg-indigo-400_59 h-[130px] m-auto rounded-[171px] w-full"></div>
            <div className="absolute bg-indigo-400_59 h-[82px] inset-[0] justify-center m-auto rounded-[106px] w-[213px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportPage;
