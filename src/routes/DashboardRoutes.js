import { Navbar } from "../components/UI/Navbar"
import { Routes, Route } from "react-router-dom";
import { DcScreen } from '../components/dc/DcScreen';
import { Marvel } from '../components/marvel/Marvel';
import { Hero } from "../components/hero/Hero";
import { SearchScreen } from "../components/search/SearchScreen";
export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container m-5">
                <Routes>
                    <Route path="/marvel" element={<Marvel />} />
                    <Route path="/dc" element={<DcScreen />} />
                    <Route path="/search" element={<SearchScreen />} />
                    <Route path="/hero/:heroeId" element={<Hero />} />
                    <Route path="/" element={<Marvel />} />
                    <Route path="/*" element={<Marvel />} />
                </Routes>
            </div>
        </>
    )
}
