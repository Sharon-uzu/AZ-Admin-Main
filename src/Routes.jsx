import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { ThreeDots } from "react-loader-spinner";
const RiderPage = React.lazy(() => import("./pages/RiderPage/RiderPage"));

const Registration = React.lazy(() =>
  import("./pages/Registration/Registration")
);
const RegisterUser = React.lazy(() =>
  import("./pages/Registration/RegisterUser")
);
const RegisterVendor = React.lazy(() =>
  import("./pages/Registration/RegisterVendor")
);
const RegisterRider = React.lazy(() =>
  import("./pages/Registration/RegisterRider")
);
const VendorPage = React.lazy(() => import("./pages/VendorPage/VendorPage"));
const VendorList = React.lazy(() => import("./pages/VendorPage/VendorList"));
const VendorActivityLog = React.lazy(() =>
  import("./pages/VendorPage/VendorActivityLog")
);
const VendorTransactions = React.lazy(() =>
  import("./pages/VendorPage/VendorTransactions")
);
const ListOfRiders = React.lazy(() => import("./pages/RiderPage/ListOfRiders"));
const DeliveryFeed = React.lazy(() => import("./pages/RiderPage/DeliveryFeed"));
const EagleEyesPage = React.lazy(() =>
  import("./pages/RiderPage/EagleEyesPage")
);
const UserListPage = React.lazy(() => import("./pages/UserPage/UserListPage"));
const UserPage = React.lazy(() => import("./pages/UserPage/UserPage"));
const UserOrderPage = React.lazy(() =>
  import("./pages/UserPage/UserOrderPage")
);
const UserTransactionPage = React.lazy(() =>
  import("./pages/UserPage/UserTransactionPage")
);
const PaymentPage = React.lazy(() => import("./pages/PaymentPage/PaymentPage"));
const PaymentInvoicePage = React.lazy(() =>
  import("./pages/PaymentPage/PaymentInvoicePage")
);
const PaymentVendorPage = React.lazy(() =>
  import("./pages/PaymentPage/PaymentVendorPage")
);
const PaymentRiderPage = React.lazy(() =>
  import("./pages/PaymentPage/PaymentRiderPage")
);
const Report = React.lazy(() => import("./pages/Report/ReportPage"));
const UserManagement = React.lazy(() =>
  import("./pages/UserManagement/UserManagement")
);
const AdminManager = React.lazy(() =>
  import("./pages/UserManagement/AdminManager")
);
const SuperAdminManager = React.lazy(() =>
  import("./pages/UserManagement/SuperAdminManager")
);
const CustomerSupport = React.lazy(() => import("./pages/CustomerSupport/CustomerSupport"));
const CustomerOverviewPage = React.lazy(() => import("./pages/CustomerSupport/CustomerOverviewPage"));
const CustomerAnalyticsPage = React.lazy(() => import("./pages/CustomerSupport/CustomerAnalyticsPage"));
const CustomerChatPage = React.lazy(() =>
  import("./pages/CustomerSupport/CustomerChatPage")
);
const CustomerTicketsPage = React.lazy(() =>
  import("./pages/CustomerSupport/CustomerTicketsPage")
);
const CustomerCallsPage = React.lazy(() =>
  import("./pages/CustomerSupport/CustomerCallsPage")
);


const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // Adjust this based on your layout
        }}
      >
        <ThreeDots
          height="90"
          width="90"
          radius="9"
          color="red"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    }>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            {/* Regisration Routes */}
            <Route path="/register/*" element={<Registration />}>
              <Route index element={<RegisterVendor />} />
              <Route path="vendors" element={<RegisterVendor />} />
              <Route path="riders" element={<RegisterRider />} />
              <Route path="users" element={<RegisterUser />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            {/* Vendors Routes */}
            <Route path="/vendors/*" element={<VendorPage />}>
              <Route index element={<VendorList />} />
              <Route path="vendors_list" element={<VendorList />} />
              <Route
                path="vendors_activity_log"
                element={<VendorActivityLog />}
              />
              <Route
                path="vendors_transactions"
                element={<VendorTransactions />}
              />
              <Route path="*" element={<NotFound />} />
            </Route>

            {/* Riders Routes */}
            <Route path="/riders/*" element={<RiderPage />}>
              <Route index element={<ListOfRiders />} />
              <Route path="list_of_riders" element={<ListOfRiders />} />
              <Route path="delivery_feed" element={<DeliveryFeed />} />
              <Route path="eagle_eyes" element={<EagleEyesPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            {/* Users Route */}
            <Route path="/users/*" element={<UserPage />}>
              <Route index element={<UserListPage />} />
              <Route path="users_list" element={<UserListPage />} />
              <Route path="users_order_list" element={<UserOrderPage />} />
              <Route
                path="users_transactions"
                element={<UserTransactionPage />}
              />
              <Route path="*" element={<NotFound />} />
            </Route>

            {/* Payment Route */}

            <Route path="/payment/*" element={<PaymentPage />}>
              <Route index element={<PaymentInvoicePage />} />
              <Route path="invoice" element={<PaymentInvoicePage />} />
              <Route path="vendor" element={<PaymentVendorPage />} />
              <Route path="rider" element={<PaymentRiderPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="/report" element={<Report />} />

            {/* User Management Route */}

            <Route path="/user_management/*" element={<UserManagement />}>
              <Route index element={<AdminManager />} />
              <Route path="admin" element={<AdminManager />} />
              <Route path="super_admin" element={<SuperAdminManager />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="/customer_support/*" element={<CustomerSupport />}>
              <Route index element={<CustomerOverviewPage />} />
              <Route path="overview" element={<CustomerOverviewPage />} />
              <Route path="analytics" element={<CustomerAnalyticsPage />} />
              <Route path="chat" element={<CustomerChatPage />} />
              <Route path="tickets" element={<CustomerTicketsPage />} />

              <Route
                path="calls"
                element={<CustomerCallsPage />}
              />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
