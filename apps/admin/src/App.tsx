import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutWrapper from "./components/LayoutWrapper";
import PolicyProvider from "./context/PolicyProvider";
import Cedent from "./pages/Cedent";
import CedentList from "./pages/Cedent/CedentList";
import CreateCedent from "./pages/Cedent/CreateCedent";
import Claim from "./pages/Claim";
import ClaimList from "./pages/Claim/ClaimList";
import ClaimMetrics from "./pages/Claim/ClaimMetrics";
import CreateClaim from "./pages/Claim/CreateClaim";
import Overview from "./pages/Overview";
import Policy from "./pages/Policy";
import CreatePolicy from "./pages/Policy/CreatePolicy";
import PolicyList from "./pages/Policy/PolicyList";
import PolicyMetrics from "./pages/Policy/PolicyMetrics";
import PremiumList from "./pages/Policy/PremiumList";
import Reinsurer from "./pages/Reinsurer";
import CreateReinsurer from "./pages/Reinsurer/CreateReinsurer";
import ReinsurerList from "./pages/Reinsurer/ReinsurerList";
import Settings from "./pages/Settings";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <PolicyProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<LayoutWrapper />}>
                  <Route path="/" element={<Overview />} />
                  <Route path="/policy" element={<Policy />}>
                    <Route path="" element={<PolicyList />} />
                    <Route path="createPolicy" element={<CreatePolicy />} />
                    <Route path="premiumList" element={<PremiumList />} />
                    <Route path="policyMetrics" element={<PolicyMetrics />} />
                  </Route>
                  <Route path="/claim" element={<Claim />}>
                    <Route path="" element={<ClaimList />} />
                    <Route path="createClaim" element={<CreateClaim />} />
                    <Route path="claimMetrics" element={<ClaimMetrics />} />
                  </Route>
                  <Route path="/reinsurer" element={<Reinsurer />}>
                    <Route path="" element={<ReinsurerList />} />
                    <Route path="createClaim" element={<CreateReinsurer />} />
                  </Route>
                  <Route path="/cedent" element={<Cedent />}>
                    <Route path="" element={<CedentList />} />
                    <Route path="createCedent" element={<CreateCedent />} />
                  </Route>
                  <Route path="/settings" element={<Settings />}></Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </PolicyProvider>
        </ErrorBoundary>
      </QueryClientProvider>
    </>
  );
}

export default App;
