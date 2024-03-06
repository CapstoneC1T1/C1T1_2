import { BrowserRouter, Route, Routes } from "react-router-dom";
import TransactionPage from "./TransactionPage";
import EasyMode from "./EasyMode";
import WrongSite from "./ErrorPage"

export default function PagesRouter() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<TransactionPage />}/>
            <Route path="/easy-mode" element={<EasyMode />}/>
            <Route path="*" element={<WrongSite />}/>
        </Routes>
    </BrowserRouter>
}